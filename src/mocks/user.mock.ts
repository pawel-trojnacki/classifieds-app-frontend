import { User } from 'types/user.interface';

export const mockUser = (
  _id = 'u1',
  username = 'User 1',
  email = 'email@email.com',
  phone = '+48123456789',
  ads: string[] = [],
  favourites: string[] = [],
  isOnline = false,
  lastSeen = new Date(new Date('2021-02-03 08:08:08'))
): User => ({
  _id,
  username,
  email,
  phone,
  ads,
  favourites,
  isOnline,
  lastSeen,
});
