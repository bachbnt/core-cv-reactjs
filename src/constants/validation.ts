import * as yup from 'yup';
import { i18nKey } from '../locales/i18n';

export const nameSchema = yup.string().required(i18nKey.name_is_required);

export const messageSchema = yup.string().required(i18nKey.message_is_required);
