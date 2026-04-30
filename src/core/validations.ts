import { Localization } from '@locales/i18n';
import { string } from 'yup';

export const nameSchema = string().required(Localization.page7_field1_error);

export const messageSchema = string().required(Localization.page7_field2_error);
