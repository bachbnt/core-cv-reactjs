import { Constant } from '@core/constants';

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
  image: ConfigImage;
  paymentEnable: boolean;
  paymentVisible: boolean;
}

interface ConfigImage {
  comingSoon: string;
  error404: string;
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
    image: data['image'] || {
      comingSoon: Constant.DEFAULT_COMING_SOON_IMAGE,
      error404: Constant.DEFAULT_ERROR_404_IMAGE,
    },
    paymentEnable: data['paymentEnable'],
    paymentVisible: data['paymentVisible'],
  };
}
