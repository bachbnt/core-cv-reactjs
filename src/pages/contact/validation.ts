import * as yup from 'yup';
import { messageSchema, nameSchema } from '../../constants/validation';

export interface FormValues {
  name: string;
  message: string;
}

export const validationSchema = yup.object().shape({
  name: nameSchema,
  message: messageSchema,
});
