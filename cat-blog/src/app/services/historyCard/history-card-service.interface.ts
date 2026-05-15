import { Observable } from 'rxjs';
import { IComment, ICommentForm } from '../../types/comment.interface';
import { History } from '../../types/history.interface';

export interface IHistoryCardService {
  getHistoryFromServer(id: string): Observable<History>;
  getCommentsFromServer(id: string): Observable<IComment[]>;
  addCommentsOnServer(comment: ICommentForm): Observable<IComment[]>;
  likeCommentOnServer(idComment: string, like: Boolean): Observable<IComment>;
  likeHistoryOnServer(idHistory: string, like: Boolean): Observable<History>;
}
