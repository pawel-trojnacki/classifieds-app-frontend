import { FC } from 'react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2';
  width?: number | string;
  typographyClass?: string;
  multiply?: boolean;
}

const Component: FC<Props> = ({
  variant,
  width,
  typographyClass,
  multiply,
}) => {
  return (
    <Typography variant={variant} className={typographyClass || ''}>
      <Skeleton variant="text" animation="wave" width={width || 'auto'} />
      {multiply && (
        <Skeleton variant="text" animation="wave" width={width || 'auto'} />
      )}
    </Typography>
  );
};

export default Component;
