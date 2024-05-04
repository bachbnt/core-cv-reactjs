import { Localization } from '@locales/i18n';
import { TrackingPageName } from '@models/tracking';
import { RouteName } from './routeName';
import { RoutePath } from './routePath';

export interface Route {
  name: string;
  path: RoutePath;
  component: RouteName;
  trackingName: TrackingPageName;
}

export const routes: Route[] = [
  {
    name: Localization.page1,
    path: RoutePath.HOME,
    component: RouteName.HOME,
    trackingName: 'page1_home',
  },
  {
    name: Localization.page2,
    path: RoutePath.ABOUT,
    component: RouteName.ABOUT,
    trackingName: 'page2_about',
  },
  {
    name: Localization.page3,
    path: RoutePath.RESUME,
    component: RouteName.RESUME,
    trackingName: 'page3_resume',
  },
  {
    name: Localization.page4,
    path: RoutePath.PROJECT,
    component: RouteName.PROJECT,
    trackingName: 'page4_project',
  },
  {
    name: Localization.page5,
    path: RoutePath.BLOG,
    component: RouteName.BLOG,
    trackingName: 'page5_blog',
  },
  {
    name: Localization.page6,
    path: RoutePath.SERVICE,
    component: RouteName.SERVICE,
    trackingName: 'page6_service',
  },
  {
    name: Localization.page7,
    path: RoutePath.CONTACT,
    component: RouteName.CONTACT,
    trackingName: 'page7_contact',
  },
  {
    name: Localization.page8,
    path: RoutePath.PAYMENT,
    component: RouteName.PAYMENT,
    trackingName: 'page8_payment',
  },
  {
    name: Localization.page_error,
    path: RoutePath.NOT_FOUND,
    component: RouteName.NOT_FOUND,
    trackingName: 'page_404_not_found',
  },
];
