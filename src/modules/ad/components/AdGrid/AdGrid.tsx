import { FC } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Ad } from 'types/ad.interface';
import AdCard from '../AdCard';
import AdLoader from '../AdLoader';

export interface Props {
  ads?: Ad[];
  small?: boolean;
}

const AdList: FC<Props> = ({ ads, small }) => {
  return (
    <Box
      maxWidth="1200px"
      marginX="auto"
      marginTop="40px"
      marginBottom="20px"
      paddingX={small ? 0 : 1}
    >
      <Grid container>
        {ads
          ? ads.map((ad) => <AdCard key={ad._id} ad={ad} small={small} />)
          : [1, 2].map((num) => <AdLoader key={num} />)}
      </Grid>
    </Box>
  );
};

export default AdList;
