export const sliceText = (text: string, maxCount = 35): string => {
  if (text.length <= 35) {
    return text;
  }

  const words = text.split(' ');

  if (words.length === 1) {
    return `${text.substring(0, maxCount)}...`;
  }

  let slicedText = '';

  for (const word of words) {
    const joined = `${slicedText} ${word}`;
    if (joined.length <= maxCount) {
      slicedText = joined;
    } else {
      break;
    }
  }

  return `${slicedText}...`;
};
