import React, { FC, FormEvent, useState } from 'react';
import { FormikErrors } from 'formik';
import { Box, Grid, Paper, Step, Stepper, StepLabel } from '@material-ui/core';
import { FormStepProps } from '../FormStep/FormStep';
import LoadingButton from 'modules/common/components/LoadingButton';
import ErrorAlert from 'modules/common/components/ErrorAlert';
import { useViewportSize } from 'hooks/useViewportSize';

interface Props {
  handleFormSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  handleSendData: any;
  validateForm: (values?: any) => Promise<FormikErrors<any>>;
}

const FormStepper: FC<Props> = ({
  children,
  handleFormSubmit,
  handleSendData,
  validateForm,
}) => {
  const { isSmWidth } = useViewportSize();
  const childernArray = React.Children.toArray(children) as React.ReactElement<
    FormStepProps
  >[];
  const [step, setStep] = useState(0);
  const currentChild = childernArray[step] as React.ReactElement<FormStepProps>;
  const isLastStep = () => {
    return step === childernArray.length - 1;
  };

  const handleButtonNextClick = async () => {
    const errors = await validateForm();
    handleFormSubmit();
    if (Object.keys(errors).length === 0) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <Paper elevation={isSmWidth ? 3 : 0}>
      <Box paddingY={3} paddingX={{ xs: 1, sm: 4, md: 6 }}>
        <Stepper alternativeLabel activeStep={step} data-testid="mui-stepper">
          {childernArray.map((child) => (
            <Step key={child.props.label}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <ErrorAlert dataContext />

        {currentChild}

        <Grid container spacing={2} justify="flex-end">
          {step > 0 && (
            <Grid item>
              <LoadingButton
                dataContext
                content="Back"
                onClick={() => setStep((prevStep) => prevStep - 1)}
              />
            </Grid>
          )}
          <Grid item>
            <LoadingButton
              dataContext
              type="submit"
              content={isLastStep() ? 'Save' : 'Next'}
              onClick={isLastStep() ? handleSendData : handleButtonNextClick}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default FormStepper;
