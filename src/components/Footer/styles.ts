/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/themes';

export default createStyleHook((theme: AppTheme) => ({
  container: {
    height: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
