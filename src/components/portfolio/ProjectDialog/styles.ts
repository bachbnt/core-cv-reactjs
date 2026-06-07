/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  dialogImg: {
    maxHeight: 600,
    objectFit: 'contain',
  },
}));
