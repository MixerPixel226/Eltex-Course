interface FormBase {
  title: string;
  content: string;
  imgSrc: string | null;
  categoryId: number | null;
}

export interface HistoryForm extends FormBase {}

export interface History extends FormBase {
  id: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
