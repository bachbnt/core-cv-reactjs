/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  card: {
    width: 300,
    height: 150,
  },
  contactIcon: {
    color: theme.colors.primary,
  },
}));
