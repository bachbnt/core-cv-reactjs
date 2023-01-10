export class Constant {
  static readonly APP_NAME = 'bachbui';
  static readonly LANGUAGE_EN = 'en';
  static readonly DEFAULT_LANGUAGE = Constant.LANGUAGE_EN;

  static readonly DEFAULT_DOMAIN = 'https://bachbntdev.web.app';
  static readonly DOMAIN =
    process.env.REACT_APP_DOMAIN || Constant.DEFAULT_DOMAIN;
  static readonly DEFAULT_ASSETS =
    'https://raw.githubusercontent.com/bachbnt/assets/main/config';
  static readonly ASSETS =
    process.env.REACT_APP_ASSETS_URL || Constant.DEFAULT_ASSETS;
  static readonly DEFAULT_APP_ICON = `${Constant.ASSETS}/logo.png`;
  static readonly DEFAULT_BACKGROUND_IMAGE = `${Constant.ASSETS}/background.webp`;
  static readonly DEFAULT_COMING_SOON_IMAGE = `${Constant.ASSETS}/coming-soon.png`;
  static readonly DEFAULT_ERROR_404_IMAGE = `${Constant.ASSETS}/error-404.png`;
  static readonly DEFAULT_APP_TITLE = process.env.REACT_APP_TITLE;

  static readonly SORT_KEY = 'index';

  static readonly FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  static readonly FIREBASE_AUTH_DOMAIN =
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
  static readonly FIREBASE_PROJECT_ID =
    process.env.REACT_APP_FIREBASE_PROJECT_ID;
  static readonly FIREBASE_STORAGE_BUCKET =
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
  static readonly FIREBASE_MESSAGING_SENDER_ID =
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
  static readonly FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
  static readonly FIREBASE_MEASUREMENT_ID =
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;
}
