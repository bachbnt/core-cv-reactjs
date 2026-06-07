/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  card: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 680,
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      height: 520,
      objectFit: 'contain',
    },
  },
}));
