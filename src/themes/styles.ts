/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { makeStyles } from '@mui/styles';
import type { AppTheme } from './themes';

const styles = makeStyles((theme: AppTheme) => ({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDescription: {
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

export default styles;
export type AppStyle = typeof styles;
