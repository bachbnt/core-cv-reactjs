import { RouteData } from './types';
import {
  Home as HomeIcon,
  Info,
  Assignment,
  Web,
  Contacts,
} from '@material-ui/icons';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Resume from '../pages/resume/resume';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/contact';
import { RouteName } from './routeName';
import { RoutePath } from './routePath';

export const routeData: RouteData = {
  home: {
    title: 'Home',
    icon: HomeIcon,
    component: Home,
    name: RouteName.HOME,
    path: RoutePath.HOME,
  },
  about: {
    title: 'About',
    icon: Info,
    component: About,
    name: RouteName.ABOUT,
    path: RoutePath.ABOUT,
  },
  resume: {
    title: 'Resume',
    icon: Assignment,
    component: Resume,
    name: RouteName.RESUME,
    path: RoutePath.RESUME,
  },
  portfolio: {
    title: 'Portfolio',
    icon: Web,
    component: Portfolio,
    name: RouteName.PORTFOLIO,
    path: RoutePath.PORTFOLIO,
  },
  contact: {
    title: 'Contact',
    icon: Contacts,
    component: Contact,
    name: RouteName.CONTACT,
    path: RoutePath.CONTACT,
  },
};
