import { messageSchema, nameSchema } from 'src/core/validations';
import * as yup from 'yup';

export interface FormValues {
  name: string;
  message: string;
}

export const validationSchema = yup.object().shape({
  name: nameSchema,
  message: messageSchema,
});
