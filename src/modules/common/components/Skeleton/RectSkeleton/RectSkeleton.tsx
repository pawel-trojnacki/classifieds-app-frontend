import { FC } from 'react';
import { Skeleton } from '@material-ui/lab';

interface RectSkeletonProps {
  height?: number | string;
  width?: number | string;
}

const RectSkeleton: FC<RectSkeletonProps> = ({ height, width }) => {
  return (
    <Skeleton
      variant="rect"
      height={height || 500}
      animation="wave"
      width={width || 'auto'}
    />
  );
};

export default RectSkeleton;
