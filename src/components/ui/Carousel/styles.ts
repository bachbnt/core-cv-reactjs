/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import createStyleHook from '@themes/createStyleHook';
import type { AppTheme } from '@themes/theme';

export default createStyleHook((theme: AppTheme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  stage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    padding: 0,
    border: 0,
    borderRadius: '50%',
    backgroundColor: '#9E9E9E',
    cursor: 'pointer',
    opacity: 0.6,
  },
  activeIndicator: {
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
  },
  indicators: {
    position: 'absolute',
    right: 0,
    bottom: theme.spacing(1),
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(1),
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.35) !important',
    '&:hover': {
      backgroundColor: `${theme.colors.secondary} !important`,
    },
  },
  prevButton: {
    left: theme.spacing(1),
  },
  nextButton: {
    right: theme.spacing(1),
  },
}));
