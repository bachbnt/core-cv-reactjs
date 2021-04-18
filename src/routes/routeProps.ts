import { RouteName } from './routeName';
import { RoutePath } from './routePath';

export interface RouteProps {
  name: RouteName;
  path: RoutePath;
  component: string;
  exact?: boolean;
}
