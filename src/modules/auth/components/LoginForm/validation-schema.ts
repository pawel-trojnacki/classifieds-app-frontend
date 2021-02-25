import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
});
