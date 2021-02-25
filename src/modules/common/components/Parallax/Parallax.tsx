import { FC } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
interface Props {
  withOpacity?: boolean;
  yRange?: number;
  yRangeOpacity?: number;
}

const Parallax: FC<Props> = ({
  children,
  withOpacity,
  yRange,
  yRangeOpacity,
}) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, yRange || 250], [0, -100]);
  const opacity = useTransform(scrollY, [0, yRangeOpacity || 250], [1, 0]);
  return (
    <motion.div style={withOpacity ? { y, opacity } : { y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
