import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Constant } from 'src/constants/constants';
import en from './en';

const resources = { en };

i18n.use(initReactI18next).init({
  lng: Constant.DEFAULT_LANGUAGE,
  keySeparator: false,
  resources: resources,
});

export default i18n;
export const i18nKey = resources[Constant.DEFAULT_LANGUAGE];
