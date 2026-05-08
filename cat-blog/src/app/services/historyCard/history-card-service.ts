import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COMMENTS_STORAGE, HISTORIES_STORAGE } from '../history/history.config';
import { History } from '../../types/history.interface';
import { IComment } from '../../types/comment.interface';
import { IHistoryCardService } from './history-card-service.interface';
@Injectable()
export class HistoryCardService implements IHistoryCardService {
  getHistoryFromServer(id: string) {
    return new Observable<History>((sub) => {
      const histories: History[] = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      const history = histories.find((e) => e.id === id);

      if (!history) {
        sub.complete();
        return;
      }

      sub.next(history);
      sub.complete();
    });
  }

  getCommentsFromServer(id: string) {
    return new Observable<IComment[]>((sub) => {
      const totalComments: IComment[] = JSON.parse(localStorage.getItem(COMMENTS_STORAGE) ?? '[]');
      const comments = totalComments.filter((e) => e.idHis === id);

      sub.next(comments);
      sub.complete();
    });
  }

  addCommentsOnServer(comment: IComment) {
    return new Observable<IComment[]>((sub) => {
      const totalComments: IComment[] = JSON.parse(localStorage.getItem(COMMENTS_STORAGE) ?? '[]');
      totalComments.push(comment);
      localStorage.setItem(COMMENTS_STORAGE, JSON.stringify(totalComments));

      const com = totalComments.filter((e) => comment.idHis === e.idHis);

      sub.next(com);
      sub.complete();
    });
  }

  likeCommentOnServer(idComment: string, like: Boolean) {
    return new Observable<number>((sub) => {
      const totalComments: IComment[] = JSON.parse(localStorage.getItem(COMMENTS_STORAGE) ?? '[]');

      let newRating: number = 0;

      const updatedComments = totalComments.map((comment) => {
        if (comment.id === idComment) {
          const currentRating = comment.rating ?? 0;
          newRating = like ? currentRating + 1 : currentRating - 1;

          return { ...comment, rating: newRating };
        }
        return comment;
      });

      localStorage.setItem(COMMENTS_STORAGE, JSON.stringify(updatedComments));

      sub.next(newRating);
      sub.complete();
    });
  }

  likeHistoryOnServer(idHistory: string, like: Boolean) {
    return new Observable<number>((sub) => {
      const totalHistory: History[] = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      let newRating: number = 0;

      const updatedComments = totalHistory.map((history) => {
        if (history.id === idHistory) {
          const currentRating = history.rating ?? 0;
          newRating = like ? currentRating + 1 : currentRating - 1;

          return { ...history, rating: newRating };
        }
        return history;
      });

      localStorage.setItem(HISTORIES_STORAGE, JSON.stringify(updatedComments));

      sub.next(newRating);
      sub.complete();
    });
  }
}
