import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoute from './components/AppRoute';
import { routes } from './routes';
import MainTemplate from 'modules/common/templates/MainTemplate';
import { RootState } from 'store/root/store';

const Router: FC = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <MainTemplate>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              isAuthenticated={isAuthenticated}
              exact
              {...route}
            />
          ))}
        </Switch>
      </AnimatePresence>
    </MainTemplate>
  );
};

export default Router;
