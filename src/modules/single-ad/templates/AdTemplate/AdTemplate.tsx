import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { RootState } from 'store/root/store';
import { clearCurrentAd, fetchSingleAd } from 'store/data/actions';
import Carousel from 'modules/single-ad/components/Carousel';
import InfoCard from 'modules/single-ad/components/InfoCard';
import AdGrid from 'modules/ad/components/AdGrid';
import AdvertiserCard from 'modules/single-ad/components/AdvertiserCard';
import ErrorWrapper from 'modules/common/components/ErrorWrapper';
import Loader from 'modules/single-ad/components/Loader';

interface ParamType {
  id: string;
}

const AdTemplate: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentAd, error } = useSelector((state: RootState) => state.data);
  const { id } = useParams<ParamType>();

  useEffect(() => {
    dispatch(fetchSingleAd(id));
    return () => {
      dispatch(clearCurrentAd());
    };
    // eslint-disable-next-line
  }, [id]);

  if (!currentAd) {
    return <div>{error ? <ErrorWrapper content={error} /> : <Loader />}</div>;
  }

  return (
    <Box className={classes.wrapper}>
      <div>
        <Carousel images={currentAd.images} />
        <Box marginY={{ xs: 6, md: 10 }}>
          <InfoCard {...currentAd} />
        </Box>
      </div>
      <div className={classes.fixed}>
        <AdvertiserCard {...currentAd.creator} />
      </div>
      <section>
        <Typography variant="h2" component="h2" align="center">
          Other ads from this user
        </Typography>
        <AdGrid ads={currentAd.creator.ads} small />
      </section>
    </Box>
  );
};

export default AdTemplate;
