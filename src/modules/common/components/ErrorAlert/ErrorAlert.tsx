import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { RootState } from 'store/root/store';

interface Props {
  dataContext?: boolean;
}

const ErrorAlert: FC<Props> = ({ dataContext }) => {
  const errorAuth = useSelector((state: RootState) => state.auth.error);
  const errorData = useSelector((state: RootState) => state.data.error);

  const error = dataContext ? errorData : errorAuth;

  if (!error) {
    return null;
  }

  return (
    <Box marginTop={3}>
      <Alert severity="error">{error}</Alert>
    </Box>
  );
};

export default ErrorAlert;
