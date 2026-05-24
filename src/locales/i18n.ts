/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import Constant from '@core/constants';
import { getConfig, getLocalization } from '@services/service';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const localization = {
  footer: 'footer',
  page0: 'page0',
  page1: 'page1',
  page1_button1: 'page1_button1',
  page1_button2: 'page1_button2',
  page1_title: 'page1_title',
  page2: 'page2',
  page2_title1: 'page2_title1',
  page2_title2: 'page2_title2',
  page2_title3: 'page2_title3',
  page3: 'page3',
  page3_title1: 'page3_title1',
  page3_title2: 'page3_title2',
  page4: 'page4',
  page4_title1: 'page4_title1',
  page4_title2: 'page4_title2',
  page4_title3: 'page4_title3',
  page5: 'page5',
  page6: 'page6',
  page7: 'page7',
  page7_button: 'page7_button',
  page7_field1: 'page7_field1',
  page7_field1_error: 'page7_field1_error',
  page7_field2: 'page7_field2',
  page7_field2_error: 'page7_field2_error',
  page7_title: 'page7_title',
  page8: 'page8',
  page9: 'page9',
  page_error: 'page_error',
  chatbot_title: 'chatbot_title',
  chatbot_welcome: 'chatbot_welcome',
  chatbot_placeholder: 'chatbot_placeholder',
  chatbot_limit_reached: 'chatbot_limit_reached',
  chatbot_error_generic: 'chatbot_error_generic',
  cv_dialog_title: 'cv_dialog_title',
  cv_dialog_download: 'cv_dialog_download',
  cv_dialog_preparing: 'cv_dialog_preparing',
  cv_dialog_close: 'cv_dialog_close',
};

const backendOptions = {
  request: async (
    _options: unknown,
    _url: unknown,
    _payload: unknown,
    callback: (err: unknown, res: { data?: unknown; status: number }) => void,
  ) => {
    try {
      const config = await getConfig();
      const data = await getLocalization(config?.language);
      callback(null, { data, status: 200 });
    } catch (error) {
      console.error(error);
      callback(null, { status: 500 });
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: backendOptions,
    fallbackLng: Constant.DEFAULT_LANGUAGE,
    debug: false,
    load: 'languageOnly',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
export const Localization = localization;
