import { categories } from 'constants/categories';

export const stateOptions = ['used', 'new'].map((option) => ({
  value: option,
}));

export const categoryOptions = categories.map((option) => ({
  value: option,
}));
