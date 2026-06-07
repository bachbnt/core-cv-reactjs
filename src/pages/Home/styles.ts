/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  greeting: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'start',
    },
  },
  leftButton: {
    marginRight: theme.spacing(2),
  },
  rightButton: {
    marginLeft: theme.spacing(2),
  },
}));
