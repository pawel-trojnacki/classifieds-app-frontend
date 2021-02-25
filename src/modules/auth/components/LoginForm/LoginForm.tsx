import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { validationSchema } from './validation-schema';
import {
  loginFields,
  initialLoginValues,
} from '../../constants/form-constants';
import { login } from 'store/auth/actions';
import TextInput from 'modules/common/components/TextInput';
import LoadingButton from 'modules/common/components/LoadingButton';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      {loginFields.map(({ name, type, label, placeholder }) => (
        <TextInput
          key={name}
          id={name}
          name={name}
          type={type}
          label={label}
          placeholder={placeholder || undefined}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched[name] && !!errors[name]}
          helperText={touched[name] && errors[name]}
        />
      ))}
      <LoadingButton content="Sign in" />
    </form>
  );
};

export default LoginForm;
