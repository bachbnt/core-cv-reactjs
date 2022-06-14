import { CardProps } from '@material-ui/core';
import { Contact } from 'src/models/contact';

type Props = {
  item: Contact;
} & CardProps;

export default Props;
