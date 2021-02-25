import { allowedPrice } from 'constants/allowed-price';

export const priceSteps = [
  allowedPrice.min,
  50,
  100,
  200,
  500,
  1000,
  2000,
  5000,
  10000,
];

export const minPriceOptions = priceSteps
  .slice(0, -1)
  .map((option) => ({ value: option }));
export const maxPriceOptions = priceSteps
  .slice(1)
  .map((option) => ({ value: option }));
