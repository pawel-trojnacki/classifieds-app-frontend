import { FC } from 'react';
import { Typography } from '@material-ui/core';
import TimeAgo from 'timeago-react';

interface Props {
  date: Date | string;
}

const Date: FC<Props> = ({ date }) => {
  return (
    <Typography variant="body2" style={{ opacity: '0.65' }}>
      <TimeAgo datetime={date} live={false} />
    </Typography>
  );
};

export default Date;
