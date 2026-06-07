/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import type { CardProps } from '@mui/material';
import { Payment } from '@models/payment';

type Props = {
  item: Payment;
  onItemClick?: (item: Payment) => void;
  onCopyClick: (item: Payment) => void;
  onCopyAllClick: (item: Payment) => void;
  onOpenDialog: () => void;
} & CardProps;

export default Props;
