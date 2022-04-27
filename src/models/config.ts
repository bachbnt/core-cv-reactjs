export interface Config {
  aboutEnable: boolean;
  aboutVisible: boolean;
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
}

export function parseConfig(data: any): Config {
  return {
    aboutEnable: data.get('aboutEnable'),
    aboutVisible: data.get('aboutVisible'),
    blogEnable: data.get('blogEnable'),
    blogVisible: data.get('blogVisible'),
    contactEnable: data.get('contactEnable'),
    contactVisible: data.get('contactVisible'),
    cvEnable: data.get('cvEnable'),
    cvVisible: data.get('cvVisible'),
    homeEnable: data.get('homeEnable'),
    homeVisible: data.get('homeVisible'),
    projectEnable: data.get('projectEnable'),
    projectVisible: data.get('projectVisible'),
    resumeEnable: data.get('resumeEnable'),
    resumeVisible: data.get('resumeVisible'),
    serviceEnable: data.get('serviceEnable'),
    serviceVisible: data.get('serviceVisible'),
  };
}
