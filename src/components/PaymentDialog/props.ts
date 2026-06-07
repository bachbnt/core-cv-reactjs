/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import type { CardProps } from '@mui/material';
import { Payment } from '@models/payment';

type Props = {
  item: Payment;
  openDialog: boolean;
  onCloseDialog: () => void;
} & CardProps;

export default Props;
