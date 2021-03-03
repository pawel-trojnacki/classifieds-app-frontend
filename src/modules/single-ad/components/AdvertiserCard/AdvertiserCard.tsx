import { FC } from 'react';
import TimeAgo from 'timeago-react';
import { Box, Grid, SvgIcon, Typography } from '@material-ui/core';
import {
  Phone as PhoneIcon,
  AlternateEmail as EmailIcon,
} from '@material-ui/icons';
import { User } from 'types/user.interface';
import CardWrapper from '../CardWrapper';

export type Props = Pick<
  User,
  'username' | 'phone' | 'email' | 'isOnline' | 'lastSeen'
>;

const AdvertiserCard: FC<Props> = ({
  username,
  phone,
  email,
  isOnline,
  lastSeen,
}) => {
  return (
    <CardWrapper fixed>
      <section>
        <Box>
          <Typography variant="h2">Advertiser</Typography>
        </Box>
        <Box marginTop={3}>
          <Typography variant="h3" data-testid="username">
            {username}
          </Typography>
        </Box>
        <Box marginTop={2}>
          {isOnline ? (
            <Typography variant="h4">Online now</Typography>
          ) : (
            <Typography variant="h4">
              Last seen: <TimeAgo datetime={lastSeen} live={false} />
            </Typography>
          )}
        </Box>
        <Box marginTop={4}>
          {[phone, email].map((element, id) => (
            <Grid key={element} container spacing={2}>
              <Grid item>
                <SvgIcon color="primary">
                  {id === 0 ? <PhoneIcon /> : <EmailIcon />}
                </SvgIcon>
              </Grid>
              <Grid item>
                <Typography variant="h4" data-testid="contact-item">
                  {element}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </section>
    </CardWrapper>
  );
};

export default AdvertiserCard;
