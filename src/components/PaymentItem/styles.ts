/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { createStyles, makeStyles } from '@mui/styles';
import colors from '@themes/colors';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    card: {
      width: 350,
      height: 500,
      position: 'relative',
    },
    img: {
      maxWidth: 300,
      maxHeight: 350,
      width: 'auto',
    },
    account: {
      flex: 1,
      overflow: 'hidden',
      wordBreak: 'break-all',
    },
    copyButton: {
      flexShrink: 0,
      color: colors.primary,
    },
    copyAllButton: {
      position: 'absolute',
      top: 4,
      right: 4,
      color: colors.primary,
    },
  }),
);
