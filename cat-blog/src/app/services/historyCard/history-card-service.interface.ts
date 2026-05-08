import { Observable } from 'rxjs';
import { IComment } from '../../types/comment.interface';
import { History } from '../../types/history.interface';

export interface IHistoryCardService {
  getHistoryFromServer(id: string): Observable<History>;
  getCommentsFromServer(id: string): Observable<IComment[]>;
  addCommentsOnServer(comment: IComment): Observable<IComment[]>;
  likeCommentOnServer(idComment: string, like: Boolean): Observable<number>;
  likeHistoryOnServer(idHistory: string, like: Boolean): Observable<number>;
}
