import { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

interface Props {
  content: string;
}

const ErrorWrapper: FC<Props> = ({ content }) => {
  return (
    <Box paddingY="25vh">
      <Typography variant="h2" component="p" align="center">
        {content}
      </Typography>
    </Box>
  );
};

export default ErrorWrapper;
