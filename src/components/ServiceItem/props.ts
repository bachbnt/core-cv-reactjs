/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { CardProps } from '@mui/material';
import { Service } from '@models/service';

type Props = {
  item: Service;
  onItemClick?: (item: Service) => void;
} & CardProps;

export default Props;
