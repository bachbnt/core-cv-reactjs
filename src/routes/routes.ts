import { i18nKey } from '../locales/i18n';
import { RouteName } from './routeName';
import { RoutePath } from './routePath';

export interface Route {
  name: string;
  path: RoutePath;
  component: RouteName;
}

export const routes: Route[] = [
  {
    name: i18nKey.home,
    path: RoutePath.HOME,
    component: RouteName.HOME,
  },
  {
    name: i18nKey.me,
    path: RoutePath.ME,
    component: RouteName.ME,
  },
  {
    name: i18nKey.resume,
    path: RoutePath.RESUME,
    component: RouteName.RESUME,
  },
  {
    name: i18nKey.project,
    path: RoutePath.PROJECT,
    component: RouteName.PROJECT,
  },
  {
    name: i18nKey.service,
    path: RoutePath.SERVICE,
    component: RouteName.SERVICE,
  },
  {
    name: i18nKey.contact,
    path: RoutePath.CONTACT,
    component: RouteName.CONTACT,
  },
];
