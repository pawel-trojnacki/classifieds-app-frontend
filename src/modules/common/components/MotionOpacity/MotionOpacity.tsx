import { FC } from 'react';
import { motion } from 'framer-motion';
import { mainTransition } from 'constants/animations';

interface Props {
  delay?: number;
  duration?: number;
}

const MotionOpacity: FC<Props> = ({ children, delay, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: delay || mainTransition.delay,
        duration: duration || mainTransition.duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionOpacity;
