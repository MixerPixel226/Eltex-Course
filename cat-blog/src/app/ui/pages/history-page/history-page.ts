import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HISTORY_CARD_SERVICE_TOKEN } from '../../../services/historyCard/history-card-service.token';
import { HistoryCardService } from '../../../services/historyCard/history-card-service';
import { HistoryCardStore } from '../../../services/historyCard/history-card-store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommentFormComponent } from '../../components/comment-form/comment-form';
import { IComment, ICommentForm } from '../../../types/comment.interface';
import { Title } from '@angular/platform-browser';
import { HistoryCardServiceGraphql } from '../../../services/historyCard/history-card-service-graphql';
import { environment } from '../../../../environments/environment';
import { HistoryCardWs } from '../../../services/historyCard/history-card-ws';
@Component({
  selector: 'app-history-page',
  imports: [MatCardModule, MatIconModule, CommentFormComponent],
  templateUrl: './history-page.html',
  styleUrl: './history-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: HISTORY_CARD_SERVICE_TOKEN,
      useClass: environment.useDevService ? HistoryCardServiceGraphql : HistoryCardService,
    },
    HistoryCardStore,
    HistoryCardWs,
  ],
})
export class HistoryPage {
  private destroyRef = inject(DestroyRef);
  protected route = inject(ActivatedRoute);
  public cardService = inject(HISTORY_CARD_SERVICE_TOKEN);
  public cardStore = inject(HistoryCardStore);
  private titleService = inject(Title);
  private cardServiceSocket = inject(HistoryCardWs);

  private params$ = this.route.paramMap.pipe(map((param) => param.get('id')));

  protected history = this.cardStore.history;
  protected comments = this.cardStore.comments;

  public idHistory = signal<string>('');

  ngOnInit() {
    this.params$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((id) => {
      if (id) {
        const prevId = this.idHistory();
        if (prevId && prevId !== id) {
          this.cardServiceSocket.unsubscribeFromArticle(prevId);
        }

        this.getHistory(id);
        this.idHistory.set(id);

        this.cardServiceSocket.subscribeToArticle(id);
      }
    });

    this.initSocketListeners();
  }

  protected sortedComments = computed(() => {
    const allComments = this.comments();

    return [...allComments].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  });

  getHistory(id: string) {
    this.cardService
      .getHistoryFromServer(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (!data) {
          console.log('Ошибочка');
          return;
        }

        this.cardStore.setHistory(data);
        if (data.title) {
          this.titleService.setTitle(data.title);
        }
        this.getСomments(data.id);
      });
  }

  getСomments(id: string) {
    this.cardService
      .getCommentsFromServer(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (!data) {
          console.log('Ошибочка');
          return;
        }

        this.cardStore.setComments(data);
      });
  }

  addComment(comment: ICommentForm) {
    this.cardService
      .addCommentsOnServer(comment)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((newComment) => {
        if (!newComment) {
          console.log('Ошибочка');
          return;
        }
        this.cardStore.setComments([...this.comments(), newComment]);
      });
  }

  onLikeComment(idComment: string, isLike: boolean) {
    this.cardService
      .likeCommentOnServer(idComment, isLike)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((comment) => {
        if (!comment) {
          console.log('Ошибочка');
          return;
        }

        const updatedComments = this.comments().map((c) =>
          c.id === idComment ? { ...c, rating: comment.rating } : c,
        );
        this.cardStore.setComments(updatedComments);
      });
  }

  onLikeHistory(isLike: boolean) {
    const idHistory = this.history()?.id;
    if (!idHistory) return;

    this.cardService
      .likeHistoryOnServer(idHistory, isLike)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((newHis) => {
        if (!newHis) {
          console.log('Ошибочка');
          return;
        }

        const currentHistory = this.history();
        if (currentHistory) {
          this.cardStore.setHistory({ ...currentHistory, rating: newHis.rating });
        }
      });
  }

  private initSocketListeners(): void {
    this.cardServiceSocket
      .onCommentCreated()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event.payload.articleId === this.idHistory()) {
          const newComment: IComment = {
            id: event.payload.commentId,
            content: event.payload.content,
            articleId: event.payload.articleId,
            username: event.payload.username,
            createdAt: event.payload.createdAt,
            rating: 0,
          };

          this.cardStore.setComments([...this.comments(), newComment]);
        }
      });

    this.cardServiceSocket
      .onCommentRatingChanged()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event.payload.articleId === this.idHistory()) {
          const updatedComments = this.comments().map((c) =>
            c.id === event.payload.commentId ? { ...c, rating: event.payload.rating } : c,
          );
          this.cardStore.setComments(updatedComments);
        }
      });

    this.cardServiceSocket
      .onArticleRatingChanged()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        const currentHistory = this.history();
        if (currentHistory && event.payload.articleId === this.idHistory()) {
          this.cardStore.setHistory({ ...currentHistory, rating: event.payload.rating });
        }
      });
  }

  ngOnDestroy() {
    const currentId = this.idHistory();
    if (currentId) {
      this.cardServiceSocket.unsubscribeFromArticle(currentId);
    }
  }
}
