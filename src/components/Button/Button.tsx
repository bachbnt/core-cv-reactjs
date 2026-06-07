/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import type { ElementType } from 'react';

type Props = ButtonProps & {
  component?: ElementType;
  to?: string;
};

const Button = (props: Props) => {
  return <MuiButton {...props} />;
};

export default Button;
