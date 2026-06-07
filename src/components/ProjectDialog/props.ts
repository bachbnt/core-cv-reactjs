/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import type { CardProps } from '@mui/material';
import { Project } from '@models/project';

type Props = {
  item: Project;
  openDialog: boolean;
  onCloseDialog: () => void;
} & CardProps;

export default Props;
