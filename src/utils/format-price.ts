export const formatPrice = (price: number): string => {
  if (price % 1 === 0) {
    return `$${price}`;
  }

  return `$${price.toFixed(2)}`;
};
