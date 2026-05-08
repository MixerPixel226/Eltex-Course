interface FormBase {
  title: string;
  desc: string;
  img: string;
}

export interface FormCreate extends FormBase {
  id?: string;
  rating?: number;
}

export interface History extends FormBase {
  id: string;
  rating?: number;
}
