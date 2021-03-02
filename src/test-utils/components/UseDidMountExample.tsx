import { FC, useRef, useState } from 'react';
import { useDidMountEffect } from 'hooks/useDidMountEffect';

const UseDidMountExample: FC = () => {
  const [textNode, setTextNode] = useState<string>('text');
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const handleButtonClick = () => {
    setTextNode('new text');
  };

  useDidMountEffect(() => {
    paragraphRef.current!.textContent = textNode;
  }, [textNode]);
  return (
    <div>
      <button onClick={handleButtonClick} data-testid="button">
        Set text node
      </button>
      <p ref={paragraphRef} data-testid="paragraph"></p>
    </div>
  );
};

export default UseDidMountExample;
