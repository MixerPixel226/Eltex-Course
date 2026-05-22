import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COMMENTS_STORAGE, HISTORIES_STORAGE } from '../history/history.config';
import { History } from '../../types/history.interface';
import { IComment, ICommentForm } from '../../types/comment.interface';
import { IHistoryCardService } from './history-card-service.interface';
@Injectable()
export class HistoryCardService implements IHistoryCardService {
  getHistoryFromServer(id: string) {
    return new Observable<History>((sub) => {
      const histories: History[] = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      const history = histories.find((e) => e.id === id);

      if (!history) {
        sub.error({ message: 'Нет таких' });
        return;
      }

      sub.next(history);
      sub.complete();
    });
  }

  getCommentsFromServer(id: string) {
    return new Observable<IComment[]>((sub) => {
      const totalComments: IComment[] = JSON.parse(localStorage.getItem(COMMENTS_STORAGE) ?? '[]');
      const comments = totalComments.filter((e) => e.articleId === id);

      sub.next(comments);
      sub.complete();
    });
  }

  addCommentsOnServer(comment: ICommentForm) {
    return new Observable<IComment>((sub) => {
      const totalComments: IComment[] = JSON.parse(localStorage.getItem(COMMENTS_STORAGE) ?? '[]');

      const newComment: IComment = {
        ...comment,
        id: crypto.randomUUID(),
        rating: 0,
        createdAt: new Date().toDateString(),
      };

      totalComments.push(newComment);
      localStorage.setItem(COMMENTS_STORAGE, JSON.stringify(totalComments));

      sub.next(newComment);
      sub.complete();
    });
  }

  likeCommentOnServer(idComment: string, like: boolean) {
    return new Observable<IComment>((sub) => {
      const totalComments: IComment[] = JSON.parse(localStorage.getItem(COMMENTS_STORAGE) ?? '[]');

      let updatedCommentResult: IComment | undefined;

      const updatedComments = totalComments.map((comment) => {
        if (comment.id === idComment) {
          const currentRating = comment.rating ?? 0;
          const newRating = like ? currentRating + 1 : currentRating - 1;

          updatedCommentResult = { ...comment, rating: newRating };
          return updatedCommentResult;
        }
        return comment;
      });

      localStorage.setItem(COMMENTS_STORAGE, JSON.stringify(updatedComments));

      if (updatedCommentResult) {
        sub.next(updatedCommentResult);
      } else {
        sub.error(new Error('Comment not found'));
      }
      sub.complete();
    });
  }

  likeHistoryOnServer(idHistory: string, like: boolean) {
    return new Observable<History>((sub) => {
      const totalHistory: History[] = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      let updatedHistoryResult: History | undefined;

      const updatedHistory = totalHistory.map((history) => {
        if (history.id === idHistory) {
          const currentRating = history.rating ?? 0;
          const newRating = like ? currentRating + 1 : currentRating - 1;

          updatedHistoryResult = { ...history, rating: newRating };
          return updatedHistoryResult;
        }
        return history;
      });

      localStorage.setItem(HISTORIES_STORAGE, JSON.stringify(updatedHistory));

      if (updatedHistoryResult) {
        sub.next(updatedHistoryResult);
      } else {
        sub.error(new Error('History not found'));
      }
      sub.complete();
    });
  }
}
