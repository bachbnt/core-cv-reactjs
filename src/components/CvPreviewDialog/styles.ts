/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import colors from '@themes/colors';
import type { AppTheme } from '@themes/themes';

export default createStyleHook((theme: AppTheme) => ({
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  downloadLink: {
    minWidth: 108,
    padding: '4px 10px',
    border: `2px solid ${colors.primary}`,
    borderRadius: theme.variables.borderRadius,
    boxSizing: 'border-box',
    color: colors.white,
    fontSize: theme.variables.fontSize,
    lineHeight: theme.variables.lineHeight,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
      color: colors.white,
    },
  },
  viewer: {
    width: '100%',
    height: 'min(78vh, 980px)',
    border: 0,
    backgroundColor: colors.grey,
  },
}));
