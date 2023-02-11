import Constant from '@core/constants';
import { service } from '@services/service';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import localization from './localization';

const backendOptions = {
  request: async (options: any, url: any, payload: any, callback: any) => {
    try {
      const config = await service.getConfig();
      const data = await service.getLocalization(config?.language);
      callback(null, {
        data,
        status: 200,
      });
    } catch (error: any) {
      callback(null, {
        status: 500,
      });
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
      wait: true,
    },
  });

export default i18n;
export const Localization = localization;
