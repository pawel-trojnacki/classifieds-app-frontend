import { FC } from 'react';
import { FormikProps } from 'formik';
import { Box } from '@material-ui/core';
import TextInput from 'modules/common/components/TextInput';
import Select from 'modules/common/components/Select';
import { categoryOptions, stateOptions } from '../../constants/form-options';
import { FormValues } from '../../constants/form-values';

export interface Props {
  formik: FormikProps<FormValues>;
}

const FormBase: FC<Props> = ({ formik }) => {
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
      <TextInput
        id="title"
        name="title"
        type="text"
        label="Title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title && !!errors.title}
        helperText={touched.title && errors.title}
      />
      <TextInput
        id="price"
        name="price"
        type="number"
        label="Price"
        value={values.price}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.price && !!errors.price}
        helperText={touched.price && errors.price}
      />
      <Box paddingBottom={3}>
        <Select
          id="category"
          name="category"
          label="Category"
          options={categoryOptions}
          value={values.category}
          handleChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && !!errors.category}
          helperText={touched.category && errors.category}
          variant="outlined"
        />
      </Box>
      <Box paddingBottom={3}>
        <Select
          id="state"
          name="state"
          label="State"
          options={stateOptions}
          value={values.state}
          handleChange={handleChange}
          onBlur={handleBlur}
          error={touched.state && !!errors.state}
          helperText={touched.state && errors.state}
          variant="outlined"
        />
      </Box>
      <TextInput
        multiline
        rows={4}
        id="description"
        name="description"
        type="text"
        label="Description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.description && !!errors.description}
        helperText={touched.description && errors.description}
      />
    </form>
  );
};

export default FormBase;
