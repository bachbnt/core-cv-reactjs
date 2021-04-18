import { RouteName } from './routeName';
import { RoutePath } from './routePath';
import { RouteProps } from './routeProps';

export const routes: RouteProps[] = [
  {
    name: RouteName.HOME,
    path: RoutePath.HOME,
    component: 'home',
  },
  {
    name: RouteName.ME,
    path: RoutePath.ME,
    component: 'me',
  },
  {
    name: RouteName.RESUME,
    path: RoutePath.RESUME,
    component: 'resume',
  },
  {
    name: RouteName.PROJECT,
    path: RoutePath.PROJECT,
    component: 'project',
  },
  {
    name: RouteName.SERVICE,
    path: RoutePath.SERVICE,
    component: 'service',
  },
  {
    name: RouteName.CONTACT,
    path: RoutePath.CONTACT,
    component: 'contact',
  },
  {
    name: RouteName.ERROR,
    path: RoutePath.ERROR,
    component: 'error',
  },
];
