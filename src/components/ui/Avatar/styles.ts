/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  root: {
    width: theme.spacing(36),
    height: theme.spacing(36),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(48),
      height: theme.spacing(48),
    },
  },
}));
