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
    aboutEnable: data['aboutEnable'],
    aboutVisible: data['aboutVisible'],
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
  };
}
