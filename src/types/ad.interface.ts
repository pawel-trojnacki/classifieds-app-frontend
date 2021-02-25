import { UserWithAds } from './user.interface';

export interface Ad {
  _id: string;
  title: string;
  state: string;
  price: number;
  category: string;
  creator: string;
  description: string;
  createdAt: Date;
  images: string[];
  favouriteBy: string[];
}

export interface AdWithCreator
  extends Pick<
    Ad,
    | '_id'
    | 'title'
    | 'state'
    | 'price'
    | 'category'
    | 'description'
    | 'createdAt'
    | 'images'
    | 'favouriteBy'
  > {
  creator: UserWithAds;
}
