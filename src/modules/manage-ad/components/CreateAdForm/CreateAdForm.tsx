import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import FormStepper from '../FormStepper';
import FormStep from '../FormStep';
import { initialValues } from '../../constants/form-values';
import { validationSchema } from '../../constants/validation-schema';
import { postAd } from 'store/data/actions';
import FormBase from '../FormBase';
import Dropzone from '../Dropzone';

const CreateAdForm: FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [files, setFiles] = useState<File[]>([]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    // onSubmit fn is required by formik, but we send a request after second step
    onSubmit: () => {},
  });

  const { handleSubmit, values, validateForm } = formik;

  const redirectOnSuccess = () => history.push('/user-ads');

  const handleSendData = () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
    if (files.length > 0) {
      files.forEach((file) => formData.append('files', file));
    }
    dispatch(postAd(formData, redirectOnSuccess));
  };

  return (
    <FormStepper
      handleFormSubmit={handleSubmit}
      handleSendData={handleSendData}
      validateForm={validateForm}
    >
      <FormStep label="Details" helperText="Provide informations about your ad">
        <FormBase formik={formik} />
      </FormStep>
      <FormStep label="Images" helperText="Add images (optional)">
        <Dropzone files={files} setFiles={setFiles} />
      </FormStep>
    </FormStepper>
  );
};

export default CreateAdForm;
