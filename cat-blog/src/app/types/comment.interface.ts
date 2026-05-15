interface ICommentBase {
  username: string;
  content: string;
  articleId: string;
}

export interface ICommentForm extends ICommentBase {}

export interface IComment extends ICommentBase {
  id: string;
  rating: number;
  createdAt: string;
}
