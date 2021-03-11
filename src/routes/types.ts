import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface Route {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
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
