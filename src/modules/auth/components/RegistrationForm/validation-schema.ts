import * as yup from 'yup';
import 'yup-phone';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'username is tog short')
    .max(20, 'username is too long')
    .required('username is required'),
  email: yup
    .string()
    .email('must be a valid email address')
    .required('email is required'),
  phone: yup.string().phone().required('phone number is required'),
  password: yup
    .string()
    .min(6, 'password has to be at least 6 characters long')
    .required('password is required'),
});
