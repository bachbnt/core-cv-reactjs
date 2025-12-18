import { CardProps } from '@mui/material';
import { Contact } from '@models/contact';

type Props = {
  item: Contact;
  onItemClick?: (item: Contact) => void;
} & CardProps;

export default Props;
