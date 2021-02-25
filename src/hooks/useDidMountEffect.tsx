import { useEffect, useRef } from 'react';

export const useDidMountEffect = (func: () => void, deps: Array<any>) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
    // eslint-disable-next-line
  }, deps);
};
