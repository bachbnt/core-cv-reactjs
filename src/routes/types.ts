import { IconType } from 'react-icons/lib';

export interface Route {
  title: string;
  icon: IconType;
  component: () => JSX.Element;
  name: string;
  path: string;
}

export interface RouteData {
  home: Route;
  about: Route;
  resume: Route;
  portfolio: Route;
  contact: Route;
}
