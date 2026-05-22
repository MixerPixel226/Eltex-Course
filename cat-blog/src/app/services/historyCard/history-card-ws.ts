import { Injectable, OnDestroy } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ArticleRatingChangedEvent,
  CommentCreatedEvent,
  CommentRatingChangedEvent,
} from '../../types/ws-requests.interface.';

@Injectable()
export class HistoryCardWs implements OnDestroy {
  private socket: Socket | null = null;

  constructor() {
    if (environment.isSockets) {
      this.socket = io('http://localhost:3000/events', { autoConnect: true });
    } else {
      console.log('Сокеты отключены для продакшна.');
    }
  }

  public subscribeToArticle(articleId: string): void {
    this.socket?.emit('subscribe-article', articleId);
  }

  public unsubscribeFromArticle(articleId: string): void {
    this.socket?.emit('unsubscribe-article', articleId);
  }

  public subscribeToAll(): void {
    this.socket?.emit('subscribe-all');
  }

  public emit(eventName: string, data: any): void {
    this.socket?.emit(eventName, data);
  }

  public listen<T>(eventName: string): Observable<T> {
    return new Observable<T>((subscriber) => {
      this.socket?.on(eventName, (data: T) => {
        subscriber.next(data);
      });

      return () => {
        this.socket?.off(eventName);
      };
    });
  }

  public onCommentCreated(): Observable<CommentCreatedEvent> {
    return this.listen<CommentCreatedEvent>('comment-created');
  }

  public onCommentRatingChanged(): Observable<CommentRatingChangedEvent> {
    return this.listen<CommentRatingChangedEvent>('comment-rating-changed');
  }

  public onArticleRatingChanged(): Observable<ArticleRatingChangedEvent> {
    return this.listen<ArticleRatingChangedEvent>('article-rating-changed');
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
