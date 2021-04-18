import { RouteName } from './routeName';
import { RoutePath } from './routePath';
import { RouteProps } from './routeProps';

export const routes: RouteProps[] = [
  {
    name: RouteName.HOME,
    path: RoutePath.HOME,
    component: RouteName.HOME,
  },
  {
    name: RouteName.ME,
    path: RoutePath.ME,
    component: RouteName.ME,
  },
  {
    name: RouteName.RESUME,
    path: RoutePath.RESUME,
    component: RouteName.RESUME,
  },
  {
    name: RouteName.PROJECT,
    path: RoutePath.PROJECT,
    component: RouteName.PROJECT,
  },
  {
    name: RouteName.SERVICE,
    path: RoutePath.SERVICE,
    component: RouteName.SERVICE,
  },
  {
    name: RouteName.CONTACT,
    path: RoutePath.CONTACT,
    component: RouteName.CONTACT,
  },
  {
    name: RouteName.ERROR,
    path: RoutePath.ERROR,
    component: RouteName.ERROR,
  },
];
