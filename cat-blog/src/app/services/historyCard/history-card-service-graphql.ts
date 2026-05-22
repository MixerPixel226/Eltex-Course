import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { IComment, ICommentForm } from '../../types/comment.interface';
import { IHistoryCardService } from './history-card-service.interface';
import { History } from '../../types/history.interface';
import {
  DISLIKE_HISTORY_REQUEST,
  GET_HISTORY_REQUEST,
  LIKE_HISTORY_REQUEST,
} from '../../requests/history-requests';
import {
  ADD_COMMENT_REQUEST,
  DISLIKE_COMMENT_REQUEST,
  GET_COMMENTS_REQUEST,
  LIKE_COMMENT_REQUEST,
} from '../../requests/comment-requests';

@Injectable()
export class HistoryCardServiceGraphql implements IHistoryCardService {
  private apollo = inject(Apollo);

  getHistoryFromServer(id: string): Observable<History | null> {
    return this.apollo
      .query<{ article: History }>({ query: GET_HISTORY_REQUEST, variables: { id } })
      .pipe(map((response) => response.data?.article ?? null));
  }

  getCommentsFromServer(id: string) {
    return this.apollo
      .query<{
        commentsByArticle: IComment[];
      }>({ query: GET_COMMENTS_REQUEST, variables: { articleId: id } })
      .pipe(map((response) => response.data?.commentsByArticle ?? null));
  }

  addCommentsOnServer(comment: ICommentForm) {
    return this.apollo
      .mutate<{ createComment: IComment }>({
        mutation: ADD_COMMENT_REQUEST,
        variables: {
          ...comment,
        },
      })
      .pipe(map((response) => response.data?.createComment ?? null));
  }

  likeCommentOnServer(idComment: string, like: boolean) {
    const mutation = like ? LIKE_COMMENT_REQUEST : DISLIKE_COMMENT_REQUEST;

    return this.apollo
      .mutate<{
        commentRatingUp?: IComment;
        commentRatingDown?: IComment;
      }>({
        mutation,
        variables: { id: idComment },
      })
      .pipe(
        map((response) => {
          if (!response.data) return null;
          const key = like ? 'commentRatingUp' : 'commentRatingDown';
          return response.data[key] ?? null;
        }),
      );
  }

  likeHistoryOnServer(idHistory: string, like: boolean): Observable<History | null> {
    const mutation = like ? LIKE_HISTORY_REQUEST : DISLIKE_HISTORY_REQUEST;

    return this.apollo
      .mutate<{
        articleRatingUp?: History;
        articleRatingDown?: History;
      }>({
        mutation,
        variables: { id: idHistory },
      })
      .pipe(
        map((response) => {
          if (!response.data) return null;
          const key = like ? 'articleRatingUp' : 'articleRatingDown';
          return response.data[key] ?? null;
        }),
      );
  }
}
