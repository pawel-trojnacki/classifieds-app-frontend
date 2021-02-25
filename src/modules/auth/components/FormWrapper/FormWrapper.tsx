import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import Logo from '../Logo';
import Tabs from '../Tabs';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';
import ErrorAlert from 'modules/common/components/ErrorAlert';
import { clearError } from 'store/auth/actions';

const initialActiveTabValue = 0;

const FormWrapper: FC = () => {
  const dispatch = useDispatch();
  const [activeTabValue, setActiveTabValue] = useState(initialActiveTabValue);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTabValue(newValue);
    dispatch(clearError());
  };
  return (
    <Box
      paddingX={{ xs: 4, sm: 20, md: 4, lg: 8 }}
      paddingY={{ xs: 3, sm: 6 }}
      marginX={{ md: 4, lg: '5vh' }}
      marginY="10vh"
    >
      <Logo />
      <Tabs value={activeTabValue} handleChange={handleTabChange} />
      {activeTabValue === initialActiveTabValue ? (
        <LoginForm />
      ) : (
        <RegistrationForm />
      )}
      <ErrorAlert />
    </Box>
  );
};

export default FormWrapper;
