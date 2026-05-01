interface FormBase {
  title: string;
  desc: string;
  img: string;
}

export interface FormCreate extends FormBase {
  id?: string;
}

export interface History extends FormBase {
  id: string;
}
