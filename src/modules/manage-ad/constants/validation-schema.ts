import * as yup from 'yup';
import { allowedPrice } from 'constants/allowed-price';

const { min, max } = allowedPrice;

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(5, 'title is too short (at least 5 characters)')
    .max(40, 'title is too long')
    .required('title is required'),
  price: yup
    .number()
    .min(min, `price must be at least ${min}`)
    .max(max, `price cannot be more than ${max}`)
    .required('price is required'),
  state: yup.string().required('you must select a state'),
  category: yup.string().required('you must select a catgory'),
  description: yup
    .string()
    .min(10, 'description is too short (at least 10 characters)')
    .max(400, 'description is too long')
    .required('description is required'),
});
