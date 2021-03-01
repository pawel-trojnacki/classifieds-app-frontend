import { FC } from 'react';
import HomePage from 'modules/home/views/HomePage';
import AdPage from 'modules/single-ad/views/AdPage';
import AuthPage from 'modules/auth/views/AuthPage';
import UserPage from 'modules/user/views/UserPage';
import ManageAdPage from 'modules/manage-ad/views/ManageAdPage';

interface Route {
  path: string;
  isProtected: boolean;
  component: FC;
}

export const routes: Route[] = [
  {
    path: '/ad/:id',
    isProtected: false,
    component: AdPage,
  },
  {
    path: '/auth',
    isProtected: false,
    component: AuthPage,
  },
  {
    path: '/user-ads',
    isProtected: true,
    component: UserPage,
  },
  {
    path: '/favourites',
    isProtected: true,
    component: UserPage,
  },
  {
    path: '/post-ad',
    isProtected: true,
    component: ManageAdPage,
  },
  {
    path: '/edit/:id',
    isProtected: true,
    component: ManageAdPage,
  },
  {
    path: '/',
    isProtected: false,
    component: HomePage,
  },
];
