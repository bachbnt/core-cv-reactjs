/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

class Constant {
  static readonly APP_NAME = 'bachbui';
  static readonly LANGUAGE_EN = 'en';
  static readonly DEFAULT_LANGUAGE = Constant.LANGUAGE_EN;

  static readonly DEFAULT_DOMAIN = 'https://bachbntdev.web.app';
  static readonly DOMAIN =
    import.meta.env.VITE_DOMAIN ?? Constant.DEFAULT_DOMAIN;
  static readonly DEFAULT_ASSETS =
    'https://raw.githubusercontent.com/bachbnt/assets/main/config';
  static readonly ASSETS =
    import.meta.env.VITE_ASSETS_URL ?? Constant.DEFAULT_ASSETS;
  static readonly DEFAULT_APP_ICON = `${Constant.ASSETS}/logo.png`;
  static readonly DEFAULT_BACKGROUND_IMAGE = `${Constant.ASSETS}/background.webp`;
  static readonly DEFAULT_COMING_SOON_IMAGE = `${Constant.ASSETS}/coming-soon.png`;
  static readonly DEFAULT_ERROR_404_IMAGE = `${Constant.ASSETS}/error-404.png`;
  static readonly DEFAULT_APP_TITLE = import.meta.env.VITE_TITLE;

  static readonly SORT_KEY = 'index';

  static readonly FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
  static readonly FIREBASE_AUTH_DOMAIN = import.meta.env
    .VITE_FIREBASE_AUTH_DOMAIN;
  static readonly FIREBASE_PROJECT_ID = import.meta.env
    .VITE_FIREBASE_PROJECT_ID;
  static readonly FIREBASE_STORAGE_BUCKET = import.meta.env
    .VITE_FIREBASE_STORAGE_BUCKET;
  static readonly FIREBASE_MESSAGING_SENDER_ID = import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID;
  static readonly FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
  static readonly FIREBASE_MEASUREMENT_ID = import.meta.env
    .VITE_FIREBASE_MEASUREMENT_ID;
  static readonly EDIT_MODE = import.meta.env.VITE_EDIT_MODE ?? 'false';

  static readonly CHAT_PROXY_URL = import.meta.env.VITE_CHAT_PROXY_URL ?? '';
  static readonly CHAT_MAX_USER_MESSAGES = 20;
  static readonly CHAT_MAX_INPUT_LENGTH = 500;
}

export default Constant;
