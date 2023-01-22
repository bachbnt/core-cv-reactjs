import { Localization } from '@locales/i18n';
import * as yup from 'yup';

export const nameSchema = yup.string().required(Localization.name_is_required);

export const messageSchema = yup
  .string()
  .required(Localization.message_is_required);
