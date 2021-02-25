import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from 'modules/common/components/NavBar';
import LogoutSnackbar from 'modules/common/components/LogoutSnackbar';
import ThemeProvider from 'theme/ThemeProvider';
import { RootState } from 'store/root/store';
import { fetchAds, fetchUserAds } from 'store/data/actions';

const MainTemplate: FC = ({ children }) => {
  const [type, setType] = useState<'main' | 'other'>('main');
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();

  const {
    filters,
    data: { lastLocation },
    auth: { isAuthenticated },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (lastLocation === null) {
      dispatch(fetchAds(filters));
    }
    // eslint-disable-next-line
  }, [filters, lastLocation]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserAds('favourites'));
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (pathname === '/') {
      setType('main');
    } else if (type !== 'other') {
      setType('other');
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <ThemeProvider>
      <NavBar isAuthenticated={isAuthenticated} type={type} />
      <main>{children}</main>
      <LogoutSnackbar />
    </ThemeProvider>
  );
};

export default MainTemplate;
