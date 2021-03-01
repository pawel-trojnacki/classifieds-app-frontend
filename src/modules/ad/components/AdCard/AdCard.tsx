import { FC } from 'react';
import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { Ad } from 'types/ad.interface';
import Link from 'modules/common/components/Link';
import Reveal from 'modules/common/components/Reveal';
import Title from '../Title';
import Price from '../Price';
import Date from '../Date';

const PLACEHOLDER_IMAGE =
  'https://aduu.pl/wp-content/uploads/2019/04/placeholder-image.jpg';

export interface Props {
  ad: Ad;
  small?: boolean;
}

const AdCard: FC<Props> = ({ ad, small }) => {
  const classes = useStyles();
  const { _id, title, price, images, createdAt } = ad;
  return (
    <Grid item xs={6} sm={4} md={small ? 4 : 3} data-testid="ad-card">
      <Reveal>
        <Link to={`/ad/${_id}`}>
          <Card className={classes.root} elevation={0}>
            <CardMedia
              className={classes.media}
              image={
                images && images.length > 0
                  ? `${process.env.REACT_APP_IMG_BASE_URL}/${images[0]}`
                  : PLACEHOLDER_IMAGE
              }
              title={title}
            />
            <CardContent className={classes.content}>
              <Title content={title} />
              <div>
                <Price content={price} />
                <Date date={createdAt} />
              </div>
            </CardContent>
          </Card>
        </Link>
      </Reveal>
    </Grid>
  );
};

export default AdCard;
