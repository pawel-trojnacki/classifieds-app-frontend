import { formatPrice } from 'utils/format-price';

describe('format-price util', () => {
  it("should return '$139.50'", () => {
    const formated = formatPrice(139.5);

    expect(formated).toBe('$139.50');
  });

  it("should return '$1500'", () => {
    const formated = formatPrice(1500);

    expect(formated).toBe('$1500');
  });
});
