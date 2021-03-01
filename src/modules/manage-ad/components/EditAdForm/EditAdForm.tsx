import { FC, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import FormStepper from '../FormStepper';
import FormStep from '../FormStep';
import { validationSchema } from '../../constants/validation-schema';
import { postAd } from 'store/data/actions';
import FormBase from '../FormBase';
import Dropzone from '../Dropzone';
import ImagesArea from '../ImagesArea';
import { AdWithCreator } from 'types/ad.interface';
import { FormValues } from 'modules/manage-ad/constants/form-values';

interface ParamType {
  id: string;
}

interface Props {
  editedAd: AdWithCreator;
}

const EditAdForm: FC<Props> = ({ editedAd }) => {
  const { title, category, state, price, description, images } = editedAd;
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<ParamType>();

  const [filesToRemove, setFilesToRemove] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const initialValues: FormValues = {
    title,
    category,
    state,
    price,
    description,
  };

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
    if (filesToRemove.length > 0) {
      filesToRemove.forEach((file) => formData.append('filesToRemove', file));
    }
    if (files.length > 0) {
      files.forEach((file) => formData.append('files', file));
    }
    dispatch(postAd(formData, redirectOnSuccess, id));
  };

  return (
    <FormStepper
      handleFormSubmit={handleSubmit}
      handleSendData={handleSendData}
      validateForm={validateForm}
    >
      <FormStep
        label="Details"
        helperText="Do you want to update informations about your ad?"
      >
        <FormBase formik={formik} />
      </FormStep>

      {images.length > 0 && (
        <FormStep
          label="Remove images"
          helperText="Do you want to remove some old images?"
        >
          <ImagesArea
            images={images}
            filesToRemove={filesToRemove}
            setFilesToRemove={setFilesToRemove}
          />
        </FormStep>
      )}

      <FormStep
        label="Add new images"
        helperText="Do you want to add new images?"
      >
        <Dropzone files={files} setFiles={setFiles} />
      </FormStep>
    </FormStepper>
  );
};

export default EditAdForm;
