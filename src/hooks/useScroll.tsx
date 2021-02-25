import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
  const [prevYPosition, setPrevYPosition] = useState<number>(0);

  const handleScroll = () => {
    if (!window || typeof window === 'undefined') {
      return;
    }

    const yPosition = window.scrollY;
    const scrollingDown = yPosition > prevYPosition;

    setIsScrollingDown(scrollingDown);
    setPrevYPosition(yPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
    // eslint-disable-next-line
  }, [prevYPosition]);

  return { isScrollingDown, prevYPosition };
};
