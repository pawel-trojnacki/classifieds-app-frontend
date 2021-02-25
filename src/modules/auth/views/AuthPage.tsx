import { FC } from 'react';
import { useSelector } from 'react-redux';
import MotionRedirect from 'router/components/MotionRedirect';
import MotionOpacity from 'modules/common/components/MotionOpacity';
import AuthTemplate from '../templates/AuthTemplate';
import { RootState } from 'store/root/store';

const AuthPage: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  if (isAuthenticated) {
    return <MotionRedirect to="/" />;
  }
  return (
    <MotionOpacity>
      <AuthTemplate />
    </MotionOpacity>
  );
};

export default AuthPage;
