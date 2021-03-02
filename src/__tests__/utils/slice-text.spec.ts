import { sliceText } from 'utils/slice-text';

const shortText = 'Lorem ipsum';
const longText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.';
// The assumption is that the title must have maximum of 35 characters and end after the full word with three dots, without breaking last word
const shortenedText = 'Lorem ipsum dolor sit amet...';

describe('slice-text util', () => {
  it('should return full short title', () => {
    const result = sliceText(shortText);

    expect(result).toBe(shortText);
  });

  it('should format long title', () => {
    const result = sliceText(longText);

    expect(result).toBe(shortenedText);
  });
});
