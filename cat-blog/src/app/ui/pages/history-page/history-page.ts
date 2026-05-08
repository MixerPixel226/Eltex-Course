import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HISTORY_CARD_SERVICE_TOKEN } from '../../../services/historyCard/history-card-service.token';
import { HistoryCardService } from '../../../services/historyCard/history-card-service';
import { HistoryCardStore } from '../../../services/historyCard/history-card-store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommentFormComponent, ICommentForm } from '../../components/comment-form/comment-form';
import { IComment } from '../../../types/comment.interface';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-history-page',
  imports: [MatCardModule, MatIconModule, CommentFormComponent],
  templateUrl: './history-page.html',
  styleUrl: './history-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: HISTORY_CARD_SERVICE_TOKEN, useClass: HistoryCardService },
    HistoryCardStore,
  ],
})
export class HistoryPage {
  private destroyRef = inject(DestroyRef);
  protected route = inject(ActivatedRoute);
  public cardService = inject(HISTORY_CARD_SERVICE_TOKEN);
  public cardStore = inject(HistoryCardStore);
  private titleService = inject(Title);

  private params$ = this.route.paramMap.pipe(map((param) => param.get('id')));

  protected history = this.cardStore.history;
  protected comments = this.cardStore.comments;

  ngOnInit() {
    this.params$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((id) => {
      if (id) {
        this.getHistory(id);
      }
    });
  }

  protected sortedComments = computed(() => {
    const allComments = this.comments();

    return [...allComments].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  });

  getHistory(id: string) {
    this.cardService
      .getHistoryFromServer(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.cardStore.setHistory(data);
        if (data && data.title) {
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
        this.cardStore.setComments(data);
      });
  }

  addComment(comment: IComment) {
    this.cardService
      .addCommentsOnServer(comment)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.cardStore.setComments(data);
      });
  }

  onLikeComment(idComment: string, isLike: boolean) {
    this.cardService
      .likeCommentOnServer(idComment, isLike)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((newRating) => {
        const updatedComments = this.comments().map((c) =>
          c.id === idComment ? { ...c, rating: newRating } : c,
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
      .subscribe((newRating) => {
        console.log(newRating);
        const currentHistory = this.history();
        if (currentHistory) {
          this.cardStore.setHistory({ ...currentHistory, rating: newRating });
        }
      });
  }
}
