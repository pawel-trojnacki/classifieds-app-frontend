import { FC } from 'react';
import { Box } from '@material-ui/core';
import { useViewportSize } from 'hooks/useViewportSize';
import RectSkeleton from 'modules/common/components/Skeleton/RectSkeleton';

const FormLoader: FC = () => {
  const { isSmWidth } = useViewportSize();
  return (
    <Box>
      <Box paddingY={3} paddingX={{ xs: 1, sm: 4, md: 6 }}>
        <RectSkeleton height={isSmWidth ? 140 : 110} />
        <Box paddingTop={7}>
          {[1, 2, 3, 4].map((element) => (
            <Box key={element} paddingBottom={3}>
              <RectSkeleton height={isSmWidth ? '50px' : '40px'} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FormLoader;
