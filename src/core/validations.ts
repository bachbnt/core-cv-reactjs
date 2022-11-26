import { i18nKey } from 'src/locales/i18n';
import * as yup from 'yup';

export const nameSchema = yup.string().required(i18nKey.name_is_required);

export const messageSchema = yup.string().required(i18nKey.message_is_required);
