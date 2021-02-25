import { FC } from 'react';
import TimeAgo from 'timeago-react';
import { Box, Typography } from '@material-ui/core';
import { Ad } from 'types/ad.interface';
import { formatPrice } from 'utils/format-price';
import CardWrapper from '../CardWrapper';

export type Props = Pick<
  Ad,
  'title' | 'price' | 'state' | 'createdAt' | 'description'
>;

const InfoCard: FC<Props> = ({
  title,
  price,
  state,
  createdAt,
  description,
}) => {
  return (
    <CardWrapper>
      <Box>
        <Typography variant="h1">{title}</Typography>
      </Box>

      <Box marginY={3}>
        <Typography variant="h3" component="p">
          {formatPrice(price)}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h4" component="p">
          {`State: ${state}`}
        </Typography>
        <Typography variant="h4" component="p">
          Posted: <TimeAgo datetime={createdAt} live={false} />
        </Typography>
      </Box>

      <Box marginTop={6}>
        <section>
          <Typography variant="h2">Description</Typography>
          <Box marginTop={3}>
            <Typography variant="body1">{description}</Typography>
          </Box>
        </section>
      </Box>
    </CardWrapper>
  );
};

export default InfoCard;
