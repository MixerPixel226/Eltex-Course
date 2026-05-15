import { Injectable, signal } from '@angular/core';
import { History } from '../../types/history.interface';
import { IComment } from '../../types/comment.interface';

@Injectable()
export class HistoryCardStore {
  constructor() {}

  private _history = signal<History | null>(null);
  public history = this._history.asReadonly();

  private _comments = signal<IComment[]>([]);
  public comments = this._comments.asReadonly();

  public setHistory(his: History) {
    this._history.set(his);
  }

  public setComments(c: IComment[]) {
    this._comments.set(c);
  }
}
