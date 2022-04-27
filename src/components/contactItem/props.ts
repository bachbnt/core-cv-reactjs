import { CardProps } from '@material-ui/core';
import { Contact } from 'src/models/contact';

export type Props = {
  item: Contact;
} & CardProps;
