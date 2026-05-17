/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { CardProps } from '@mui/material';
import { Experience } from '@models/experience';

type Props = {
  item: Experience;
  onItemClick?: (item: Experience) => void;
} & CardProps;

export default Props;
