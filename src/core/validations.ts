import { Localization } from '@locales/i18n';
import * as yup from 'yup';

export const nameSchema = yup
  .string()
  .required(Localization.page7_field1_error);

export const messageSchema = yup
  .string()
  .required(Localization.page7_field2_error);
