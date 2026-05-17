/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { CardProps } from '@mui/material';
import { Contact } from '@models/contact';

type Props = {
  item: Contact;
  onItemClick?: (item: Contact) => void;
} & CardProps;

export default Props;
