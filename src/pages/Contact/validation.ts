import { messageSchema, nameSchema } from '@core/validations';
import { object } from 'yup';

export interface FormValues {
  name: string;
  message: string;
}

export const validationSchema = object().shape({
  name: nameSchema,
  message: messageSchema,
});
