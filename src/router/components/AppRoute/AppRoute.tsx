import { FC } from 'react';
import { Route } from 'react-router-dom';
import MotionRedirect from '../MotionRedirect';

interface Props {
  component: FC;
  isAuthenticated: boolean;
  isProtected: boolean;
  path?: string;
  exact?: boolean;
}

const AppRoute: FC<Props> = ({
  component: Component,
  isAuthenticated,
  isProtected,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isProtected && !isAuthenticated) {
          return (
            <MotionRedirect
              to={{ pathname: '/auth', state: { from: props.location } }}
            />
          );
        }
        return <Component />;
      }}
    />
  );
};

export default AppRoute;
