interface ICommentBase {
  username: string;
  text: string;
  date: Date;
  idHis: string;
}

export interface ICommentFrom extends ICommentBase {
  id?: string;
}

export interface IComment extends ICommentBase {
  id: string;
  rating: number;
}
