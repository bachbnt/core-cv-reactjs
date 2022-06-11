import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.secondary,
        },
      },
    }),
  { index: 1 }
);
