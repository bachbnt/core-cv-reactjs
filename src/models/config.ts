import Constant from '@core/constants';

export interface Config {
  aboutEnable: boolean;
  aboutVisible: boolean;
  certificateEnable: boolean;
  certificateVisible: boolean;
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
  language: string;
  paymentEnable: boolean;
  paymentVisible: boolean;
  chatEnable: boolean;
  chatVisible: boolean;
  chatProvider: string;
}

interface ConfigImage {
  comingSoon: string;
  error404: string;
}

export function parseConfig(data: Record<string, any>): Config {
  return {
    aboutEnable: data.aboutEnable ?? false,
    aboutVisible: data.aboutVisible ?? false,
    certificateEnable: data.certificateEnable ?? false,
    certificateVisible: data.certificateVisible ?? false,
    appIcon: data.appIcon ?? Constant.DEFAULT_APP_ICON,
    appTitle: data.appTitle ?? Constant.DEFAULT_APP_TITLE,
    blogEnable: data.blogEnable ?? false,
    blogVisible: data.blogVisible ?? false,
    contactEnable: data.contactEnable ?? false,
    contactVisible: data.contactVisible ?? false,
    cvEnable: data.cvEnable ?? false,
    cvVisible: data.cvVisible ?? false,
    homeEnable: data.homeEnable ?? false,
    homeVisible: data.homeVisible ?? false,
    projectEnable: data.projectEnable ?? false,
    projectVisible: data.projectVisible ?? false,
    resumeEnable: data.resumeEnable ?? false,
    resumeVisible: data.resumeVisible ?? false,
    serviceEnable: data.serviceEnable ?? false,
    serviceVisible: data.serviceVisible ?? false,
    image: data.image ?? {
      comingSoon: Constant.DEFAULT_COMING_SOON_IMAGE,
      error404: Constant.DEFAULT_ERROR_404_IMAGE,
    },
    language: data.language ?? Constant.DEFAULT_LANGUAGE,
    paymentEnable: data.paymentEnable ?? false,
    paymentVisible: data.paymentVisible ?? false,
    chatEnable: data.chatEnable ?? false,
    chatVisible: data.chatVisible ?? false,
    chatProvider: data.chatProvider ?? 'gemini',
  };
}
