export interface Contact {
  enable: boolean;
  index: number;
  name: string;
  nameVisible: boolean;
  subtype: string;
  type: string;
  url: string;
  visible: boolean;
}

export enum ContactSubtype {
  ADDRESS = 'address',
  PHONE = 'phone',
  EMAIL = 'email',
  FACEBOOK = 'facebook',
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  SKYPE = 'skype',
  ZALO = 'zalo',
}

export enum ContactType {
  CONTACT = 'contact',
  SOCIAL = 'social',
}
