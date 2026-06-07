/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import type { CardProps } from '@mui/material';
import { Education } from '@models/education';

type Props = {
  item: Education;
  onItemClick?: (item: Education) => void;
} & CardProps;

export default Props;
