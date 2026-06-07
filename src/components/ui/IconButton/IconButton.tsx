/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton as MuiIconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material';

type Props = IconButtonProps;

const IconButton = (props: Props) => {
  return <MuiIconButton {...props} />;
};

export default IconButton;
