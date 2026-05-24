/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    content: {
      flex: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      width: '100%',
      [theme.breakpoints.up('xl')]: {
        maxWidth: theme.variables.desktopContentMaxWidth,
      },
    },
    enterNext: {
      animation: '$enterFromRight 350ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    enterPrev: {
      animation: '$enterFromLeft 350ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    exitNext: {
      animation: '$exitToLeft 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      animationFillMode: 'forwards',
      pointerEvents: 'none',
    },
    exitPrev: {
      animation: '$exitToRight 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      animationFillMode: 'forwards',
      pointerEvents: 'none',
    },
    '@keyframes enterFromRight': {
      from: { transform: 'translateX(80px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },
    '@keyframes enterFromLeft': {
      from: { transform: 'translateX(-80px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },
    '@keyframes exitToLeft': {
      from: { transform: 'translateX(0)', opacity: 1 },
      to: { transform: 'translateX(-80px)', opacity: 0 },
    },
    '@keyframes exitToRight': {
      from: { transform: 'translateX(0)', opacity: 1 },
      to: { transform: 'translateX(80px)', opacity: 0 },
    },
  }),
);
