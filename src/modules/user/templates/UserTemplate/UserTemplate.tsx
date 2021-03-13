import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { fetchUserAds } from 'store/data/actions';
import { RootState } from 'store/root/store';
import ErrorWrapper from 'modules/common/components/ErrorWrapper';
import AdList from 'modules/ad/components/AdList';

const UserTemplate: FC = () => {
  const { pathname } = useLocation();
  const isUserAdsPage = pathname === '/user-ads';
  const dispatch = useDispatch();
  const {
    userAds,
    favouriteAds,
    isLoading,
    userAdsError,
    favouriteAdsError,
  } = useSelector((state: RootState) => state.data);

  const error = isUserAdsPage ? userAdsError : favouriteAdsError;

  useEffect(() => {
    if (isUserAdsPage) {
      dispatch(fetchUserAds());
      console.log({ userAds });
    } else {
      dispatch(fetchUserAds('favourites'));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const ads = isUserAdsPage ? userAds : favouriteAds;
  const noAdsMessage = isUserAdsPage
    ? "You don't have any ads yet"
    : "You haven't added any ads to favourites yet";
  const title = isUserAdsPage ? 'Your ads' : 'Favourite ads';

  return (
    <Box marginY="15vh">
      <Typography variant="h1" align="center">
        {title}
      </Typography>
      <Box marginTop={8}>
        {isLoading && <AdList />}
        {!isLoading && !error && (
          <AdList ads={ads} favourites={!isUserAdsPage} />
        )}
        {error && <ErrorWrapper content={error} />}
        {!isLoading && !error && ads.length === 0 && (
          <ErrorWrapper content={noAdsMessage} />
        )}
      </Box>
    </Box>
  );
};

export default UserTemplate;
