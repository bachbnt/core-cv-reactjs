/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/themes';

export default createStyleHook((theme: AppTheme) => ({
  backdrop: {
    zIndex: 1,
  },
  spinner: {
    color: theme.colors.primary,
  },
}));
