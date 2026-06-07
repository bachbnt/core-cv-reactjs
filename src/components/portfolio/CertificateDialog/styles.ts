/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    objectFit: 'contain',
  },
}));
