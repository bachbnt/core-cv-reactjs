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
    name: Localization.page1,
    path: RoutePath.HOME,
    component: RouteName.HOME,
  },
  {
    name: Localization.page2,
    path: RoutePath.ABOUT,
    component: RouteName.ABOUT,
  },
  {
    name: Localization.page3,
    path: RoutePath.RESUME,
    component: RouteName.RESUME,
  },
  {
    name: Localization.page4,
    path: RoutePath.PROJECT,
    component: RouteName.PROJECT,
  },
  {
    name: Localization.page5,
    path: RoutePath.BLOG,
    component: RouteName.BLOG,
  },
  {
    name: Localization.page6,
    path: RoutePath.SERVICE,
    component: RouteName.SERVICE,
  },
  {
    name: Localization.page7,
    path: RoutePath.CONTACT,
    component: RouteName.CONTACT,
  },
  {
    name: Localization.page8,
    path: RoutePath.PAYMENT,
    component: RouteName.PAYMENT,
  },
  {
    name: Localization.page_error,
    path: RoutePath.NOT_FOUND,
    component: RouteName.NOT_FOUND,
  },
];
