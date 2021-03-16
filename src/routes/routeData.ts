import { RouteData } from './types';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Resume from '../pages/resume/resume';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/contact';
import { RouteName } from './routeName';
import { RoutePath } from './routePath';
import {
  MdAssignment,
  MdContacts,
  MdHome,
  MdInfo,
  MdWeb,
} from 'react-icons/md';

export const routeData: RouteData = {
  home: {
    title: 'Home',
    icon: MdHome,
    component: Home,
    name: RouteName.HOME,
    path: RoutePath.HOME,
  },
  about: {
    title: 'About',
    icon: MdInfo,
    component: About,
    name: RouteName.ABOUT,
    path: RoutePath.ABOUT,
  },
  resume: {
    title: 'Resume',
    icon: MdAssignment,
    component: Resume,
    name: RouteName.RESUME,
    path: RoutePath.RESUME,
  },
  portfolio: {
    title: 'Portfolio',
    icon: MdWeb,
    component: Portfolio,
    name: RouteName.PORTFOLIO,
    path: RoutePath.PORTFOLIO,
  },
  contact: {
    title: 'Contact',
    icon: MdContacts,
    component: Contact,
    name: RouteName.CONTACT,
    path: RoutePath.CONTACT,
  },
};
