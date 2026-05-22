import { Observable } from 'rxjs';
import { IComment, ICommentForm } from '../../types/comment.interface';
import { History } from '../../types/history.interface';

export interface IHistoryCardService {
  getHistoryFromServer(id: string): Observable<History | null>;
  getCommentsFromServer(id: string): Observable<IComment[] | null>;
  addCommentsOnServer(comment: ICommentForm): Observable<IComment | null>;
  likeCommentOnServer(idComment: string, like: boolean): Observable<IComment | null>;
  likeHistoryOnServer(idHistory: string, like: boolean): Observable<History | null>;
}
