import { FC } from 'react';
import { Skeleton } from '@material-ui/lab';
import { Box, Grid, Typography } from '@material-ui/core';
import { useViewportSize } from 'hooks/useViewportSize';
import RectSkeleton from 'modules/common/components/Skeleton/RectSkeleton';

const navBarHeightXsUp = '56px';

const Loader: FC = () => {
  const { isMdWidth, isSmWidth } = useViewportSize();

  if (isMdWidth) {
    return (
      <Box marginTop="15vh" marginX="5%">
        <Grid container spacing={10}>
          <Grid item md={8}>
            <RectSkeleton />
          </Grid>
          <Grid item md={4}>
            <RectSkeleton />
          </Grid>
        </Grid>
      </Box>
    );
  }
  return (
    <Box marginTop={navBarHeightXsUp}>
      <RectSkeleton height={isSmWidth ? '500px' : '250px'} />
      <Box marginY={5}>
        <Typography variant="h1">
          <Skeleton variant="text" animation="pulse" />
        </Typography>
        <Typography variant="h1">
          <Skeleton variant="text" animation="pulse" />
        </Typography>
        <Typography variant="h2">
          <Skeleton variant="text" animation="pulse" width="30%" />
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
