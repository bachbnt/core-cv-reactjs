import { Constant } from 'src/core/constants';

export interface Config {
  aboutEnable: boolean;
  aboutVisible: boolean;
  appIcon: string;
  appTitle: string;
  blogEnable: boolean;
  blogVisible: boolean;
  contactEnable: boolean;
  contactVisible: boolean;
  cvEnable: boolean;
  cvVisible: boolean;
  homeEnable: boolean;
  homeVisible: boolean;
  projectEnable: boolean;
  projectVisible: boolean;
  resumeEnable: boolean;
  resumeVisible: boolean;
  serviceEnable: boolean;
  serviceVisible: boolean;
  paymentEnable: boolean;
  paymentVisible: boolean;
}

export function parseConfig(data: any): Config {
  return {
    aboutEnable: data['aboutEnable'],
    aboutVisible: data['aboutVisible'],
    appIcon: data['appIcon'] || Constant.DEFAULT_APP_ICON,
    appTitle: data['appTitle'] || Constant.DEFAULT_APP_TITLE,
    blogEnable: data['blogEnable'],
    blogVisible: data['blogVisible'],
    contactEnable: data['contactEnable'],
    contactVisible: data['contactVisible'],
    cvEnable: data['cvEnable'],
    cvVisible: data['cvVisible'],
    homeEnable: data['homeEnable'],
    homeVisible: data['homeVisible'],
    projectEnable: data['projectEnable'],
    projectVisible: data['projectVisible'],
    resumeEnable: data['resumeEnable'],
    resumeVisible: data['resumeVisible'],
    serviceEnable: data['serviceEnable'],
    serviceVisible: data['serviceVisible'],
    paymentEnable: data['paymentEnable'],
    paymentVisible: data['paymentVisible'],
  };
}
