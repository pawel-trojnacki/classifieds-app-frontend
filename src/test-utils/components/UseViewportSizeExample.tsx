import { FC } from 'react';

import { useViewportSize } from '../../hooks/useViewportSize';

const UseViewportSizeExample: FC = () => {
  const { isSmWidth, isMdWidth, isLgWidth } = useViewportSize();
  return (
    <div>
      <p>
        {isSmWidth
          ? 'Is Sm width'
          : isMdWidth
          ? 'Is Md width'
          : isLgWidth
          ? 'Is Lg width'
          : 'Is less than Sm widht'}
      </p>
    </div>
  );
};

export default UseViewportSizeExample;
