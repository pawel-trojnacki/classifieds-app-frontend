import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { validationSchema } from './validation-schema';
import {
  initialSignupValues,
  signupFields,
} from '../../constants/form-constants';
import { signup } from 'store/auth/actions';
import TextInput from 'modules/common/components/TextInput';
import LoadingButton from 'modules/common/components/LoadingButton';

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialSignupValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(signup(values));
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
      {signupFields.map(({ name, type, label, placeholder }) => (
        <TextInput
          key={name}
          placeholder={placeholder || undefined}
          id={name}
          name={name}
          type={type}
          label={label}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched[name] && !!errors[name]}
          helperText={touched[name] && errors[name]}
        />
      ))}
      <LoadingButton content="Sign up" />
    </form>
  );
};

export default RegistrationForm;
