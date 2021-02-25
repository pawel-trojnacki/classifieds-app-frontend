import { FC } from 'react';
import { Box, Grid } from '@material-ui/core';
import { useStyles } from '../AdCard/styles';
import { useViewportSize } from 'hooks/useViewportSize';
import RectSkeleton from 'modules/common/components/Skeleton/RectSkeleton';
import TextSkeleton from 'modules/common/components/Skeleton/TextSkeleton';

const AdLoader: FC = () => {
  const classes = useStyles();
  const { isSmWidth } = useViewportSize();
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Box margin={{ xs: '12px 5px', sm: '20px 12px' }}>
        <RectSkeleton height={isSmWidth ? 180 : 140} />
        <div className={classes.content}>
          <TextSkeleton variant="h1" multiply />
          <div>
            <TextSkeleton variant="body1" width="40%" />
            <TextSkeleton variant="body2" width="40%" />
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default AdLoader;
