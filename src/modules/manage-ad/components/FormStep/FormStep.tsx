import React, { FC } from 'react';
import { FormikConfig, FormikValues } from 'formik';
import { Box, Typography } from '@material-ui/core';

export interface FormStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
  helperText: string;
}

const FormStep: FC<FormStepProps> = ({ children, helperText }) => {
  return (
    <Box marginY={4}>
      <Box textAlign="center" paddingTop={2} paddingBottom={4}>
        <Typography variant="h3" component="h2">
          {helperText}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default FormStep;
