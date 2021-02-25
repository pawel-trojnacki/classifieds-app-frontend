import { AdCategories } from 'types/ad-categories.enum';
import Logo from 'assets/svg/logo-icon.svg';
import Laptop from 'assets/svg/laptop.svg';
import Smartphone from 'assets/svg/smartphone.svg';
import Tablet from 'assets/svg/tablet.svg';
import Monitor from 'assets/svg/monitor.svg';
import Headphones from 'assets/svg/headphones.svg';
import Smartwatch from 'assets/svg/smartwatch.svg';
import Loudspeaker from 'assets/svg/loudspeaker.svg';
import Googles from 'assets/svg/googles.svg';

interface Category {
  name: string;
  component: any;
}

export const categories: Category[] = [
  { name: 'all', component: Logo },
  { name: AdCategories.Laptops, component: Laptop },
  { name: AdCategories.Smartphones, component: Smartphone },
  { name: AdCategories.Tablets, component: Tablet },
  { name: AdCategories.Monitors, component: Monitor },
  { name: AdCategories.Headphones, component: Headphones },
  { name: AdCategories.Loudspeakers, component: Loudspeaker },
  { name: AdCategories.Smartwatches, component: Smartwatch },
  { name: AdCategories.Accessories, component: Googles },
];
