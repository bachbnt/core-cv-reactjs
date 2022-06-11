import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        color: theme.colors.white,
      },
    }),
  { index: 1 }
);
