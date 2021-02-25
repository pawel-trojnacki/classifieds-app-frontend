import { Ad } from './ad.interface';

export interface User {
  _id: string;
  username: string;
  email: string;
  phone: string;
  ads: string[];
  favourites: string[];
  isOnline: boolean;
  lastSeen: Date;
}

export interface UserWithAds
  extends Pick<
    User,
    | '_id'
    | 'username'
    | 'email'
    | 'phone'
    | 'favourites'
    | 'isOnline'
    | 'lastSeen'
  > {
  ads: Ad[];
}
