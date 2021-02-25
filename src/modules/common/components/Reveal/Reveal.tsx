import { FC, useEffect } from 'react';
import { motion, useAnimation, AnimationProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mainTransition } from 'constants/animations';

interface Props {
  variants?: {
    visible: AnimationProps;
    hidden: AnimationProps;
  };
  duration?: number;
  delay?: number;
}

const Reveal: FC<Props> = ({ children, variants, duration, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        duration: duration || mainTransition.duration,
        delay: delay || mainTransition.delay,
        ease: 'easeInOut',
      }}
      variants={
        variants || {
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 16 },
        }
      }
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
