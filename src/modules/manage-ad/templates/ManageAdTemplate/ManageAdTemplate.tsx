import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CreateAdForm from 'modules/manage-ad/components/CreateAdForm';
import EditAdForm from 'modules/manage-ad/components/EditAdForm';
import { clearCurrentAd, fetchAds, fetchSingleAd } from 'store/data/actions';
import { RootState } from 'store/root/store';
import ErrorWrapper from 'modules/common/components/ErrorWrapper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '650px',
      margin: '10vh 10px 50px',
      [theme.breakpoints.up('sm')]: {
        margin: '15vh 10vw 100px',
      },
      [theme.breakpoints.up('sm')]: {
        margin: '15vh auto 100px',
      },
    },
  })
);

interface ParamType {
  id: string;
}

const ManageAdTemplate: FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { id } = useParams<ParamType>();
  const dispatch = useDispatch();
  const { currentAd, error, isLoading } = useSelector(
    (state: RootState) => state.data
  );
  const filters = useSelector((state: RootState) => state.filters);

  const isPostAdPage = pathname === '/post-ad';

  useEffect(() => {
    dispatch(fetchSingleAd(id));
    return () => {
      dispatch(clearCurrentAd());
    };
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(fetchAds(filters));
    };
    // eslint-disable-next-line
  }, [filters]);

  if (isPostAdPage) {
    return (
      <div className={classes.root}>
        <CreateAdForm />
      </div>
    );
  }

  if (!currentAd || isLoading) {
    return (
      <div>
        {error ? <ErrorWrapper content={error} /> : <h1>Loading...</h1>}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <EditAdForm editedAd={currentAd} />
    </div>
  );
};

export default ManageAdTemplate;
