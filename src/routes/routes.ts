import { Localization } from '@locales/i18n';
import { RouteName } from './routeName';
import { RoutePath } from './routePath';

export interface Route {
  name: string;
  path: RoutePath;
  component: RouteName;
}

export const routes: Route[] = [
  {
    name: Localization.home,
    path: RoutePath.HOME,
    component: RouteName.HOME,
  },
  {
    name: Localization.about,
    path: RoutePath.ABOUT,
    component: RouteName.ABOUT,
  },
  {
    name: Localization.resume,
    path: RoutePath.RESUME,
    component: RouteName.RESUME,
  },
  {
    name: Localization.project,
    path: RoutePath.PROJECT,
    component: RouteName.PROJECT,
  },
  {
    name: Localization.blog,
    path: RoutePath.BLOG,
    component: RouteName.BLOG,
  },
  {
    name: Localization.service,
    path: RoutePath.SERVICE,
    component: RouteName.SERVICE,
  },
  {
    name: Localization.contact,
    path: RoutePath.CONTACT,
    component: RouteName.CONTACT,
  },
  {
    name: Localization.payment,
    path: RoutePath.PAYMENT,
    component: RouteName.PAYMENT,
  },
  {
    name: Localization.not_found,
    path: RoutePath.NOT_FOUND,
    component: RouteName.NOT_FOUND,
  },
];
