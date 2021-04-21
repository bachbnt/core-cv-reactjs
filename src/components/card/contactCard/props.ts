import { CardProps } from '@material-ui/core';
import { Contact } from '../../../models/contact';

export type Props = {
  item: Contact;
  icon: JSX.Element;
  title: string;
} & CardProps;
