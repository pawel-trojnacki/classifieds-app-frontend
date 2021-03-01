import { FC } from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { Ad } from 'types/ad.interface';
import { useStyles } from './styles';
import Reveal from 'modules/common/components/Reveal';
import Title from '../Title';
import Price from '../Price';
import Date from '../Date';
import Actions from './Actions';
import ActionsFavourites from './ActionsFavourites';

const PLACEHOLDER_IMAGE =
  'https://aduu.pl/wp-content/uploads/2019/04/placeholder-image.jpg';

export interface Props {
  ad: Ad;
  favourites?: boolean;
}

const AdListItem: FC<Props> = ({ ad, favourites }) => {
  const { _id, title, price, images, createdAt } = ad;
  const classes = useStyles();
  return (
    <Box component="li" className={classes.root} data-testid="ad-list-item">
      <Reveal>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={5} sm={4}>
              <img
                src={
                  images && images.length > 0
                    ? `${process.env.REACT_APP_IMG_BASE_URL}/${images[0]}`
                    : PLACEHOLDER_IMAGE
                }
                alt={title}
                className={classes.img}
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
                  <Title content={title} />
                  <Price content={price} />
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" justify="space-between">
                    <Date date={createdAt} />
                    {!!favourites ? (
                      <ActionsFavourites _id={_id} />
                    ) : (
                      <Actions _id={_id} />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Reveal>
    </Box>
  );
};

export default AdListItem;
