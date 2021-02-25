import { FC } from 'react';
import { Box, Grid } from '@material-ui/core';
import { useStyles } from '../AdListItem/styles';
import { useViewportSize } from 'hooks/useViewportSize';
import RectSkeleton from 'modules/common/components/Skeleton/RectSkeleton';
import TextSkeleton from 'modules/common/components/Skeleton/TextSkeleton';

const ListItemLoader: FC = () => {
  const classes = useStyles();
  const { isSmWidth, isMdWidth } = useViewportSize();
  return (
    <Box marginY={{ xs: '20px', sm: '40px' }} marginX="auto" maxWidth="920px">
      <Grid container>
        <Grid item xs={5} sm={4}>
          <RectSkeleton
            height={isMdWidth ? '180px' : isSmWidth ? '160px' : '140px'}
          />
        </Grid>

        <Grid item xs={7} sm={8}>
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.content}
          >
            <Grid item>
              <TextSkeleton variant="h2" />
              <TextSkeleton variant="h3" />
            </Grid>
            <Grid item>
              <TextSkeleton variant="body2" width="40%" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListItemLoader;
