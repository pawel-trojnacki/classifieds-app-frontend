import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import { RootState } from 'store/root/store';

interface Props extends ButtonProps {
  content: string;
  dataContext?: boolean;
  secondary?: boolean;
}

const LoadingButton: FC<Props> = ({
  content,
  dataContext,
  secondary,
  ...rest
}) => {
  const isLoadingAuth = useSelector((state: RootState) => state.auth.isLoading);
  const isLoadingData = useSelector((state: RootState) => state.data.isLoading);

  const isLoading = dataContext ? isLoadingData : isLoadingAuth;

  return (
    <Button
      fullWidth
      variant="contained"
      color={secondary ? 'secondary' : 'primary'}
      disabled={isLoading}
      type="submit"
      data-testid="loading-button"
      {...rest}
    >
      {isLoading ? (
        <CircularProgress size={26} data-testid="circular-progress" />
      ) : (
        <>{content}</>
      )}
    </Button>
  );
};

export default LoadingButton;
