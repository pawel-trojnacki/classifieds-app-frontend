export interface FormValues {
  title: string;
  category: string;
  state: string;
  price: number | '';
  description: string;
}

export const initialValues: FormValues = {
  title: '',
  category: '',
  state: '',
  price: '',
  description: '',
};
