import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import AdGrid from 'modules/ad/components/AdGrid';
import Tabs from 'modules/home/components/Tabs';
import FiltersBar from '../../components/FiltersBar';
import Pagination from 'modules/ad/components/Pagination';
import ErrorWrapper from 'modules/common/components/ErrorWrapper';
import { RootState } from 'store/root/store';

const HomeTemplate: FC = () => {
  const data = useSelector((state: RootState) => state.data);
  const { ads, isLoading, error } = data;

  return (
    <Box paddingBottom={{ xs: '110px', md: '140px' }}>
      <Tabs />
      {error && <ErrorWrapper content={error} />}
      {!isLoading && !error && ads.length === 0 && (
        <ErrorWrapper content="There are no such ads" />
      )}
      {isLoading && <AdGrid />}
      {!isLoading && !error && ads.length > 0 && <AdGrid ads={ads} />}
      {!error && <Pagination />}
      <FiltersBar />
    </Box>
  );
};

export default HomeTemplate;
