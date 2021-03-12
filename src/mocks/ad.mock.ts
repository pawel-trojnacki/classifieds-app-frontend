import { AdCategories } from '../types/ad-categories.enum';
import { Ad } from 'types/ad.interface';

export const mockedDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit leo, volutpat non faucibus nec, rhoncus non nisi. Suspendisse potenti. Integer hendrerit enim ac libero congue, non dictum ipsum laoreet. Quisque consequat imperdiet lorem, at pellentesque elit pellentesque sit amet. Aliquam ullamcorper varius turpis, quis pulvinar ante faucibus at.';

export const mockedImages = [
  'https://u.cyfrowe.pl/600x0/c/b/68382(3)_346442253.jpg',
  'https://u.cyfrowe.pl/600x0/8/1/68382(8)_972956770.jpg',
  'https://u.cyfrowe.pl/600x0/5/c/68382(9)_802774005.jpg',
];

export const mockAd = (
  _id = 'ad1',
  title = 'Lorem ipsum dolor sit amet consectetur.',
  creator = 'u1',
  category = AdCategories.Laptops,
  price = 1000,
  state = 'used',
  description = mockedDescription,
  images: string[] = [],
  favouriteBy = [],
  createdAt = new Date('2021-02-03 08:08:08')
): Ad => ({
  _id,
  title,
  creator,
  category,
  price,
  state,
  description,
  images,
  favouriteBy,
  createdAt,
});

export const mockAdList = (): Ad[] => [
  mockAd(),
  mockAd(
    'ad2',
    'Lorem ipsum dolor sit amet consectetur adipiscing',
    'u2',
    AdCategories.Smartphones,
    800,
    'new',
    mockedDescription,
    mockedImages
  ),
  mockAd('ad3', 'Third Ad', 'u2', AdCategories.Tablets, 699.9, 'used'),
  mockAd('ad4', 'Another Ad', 'u2', AdCategories.Accessories, 900, 'used'),
];
