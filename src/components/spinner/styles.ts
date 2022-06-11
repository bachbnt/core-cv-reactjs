import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      backdrop: {
        zIndex: 1,
      },
      spinner: {
        color: theme.colors.primary,
      },
    }),
  { index: 1 }
);
