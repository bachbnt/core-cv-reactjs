import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        '&:hover': {
          backgroundColor: theme.colors.secondary,
        },
      },
      selected: {},
    }),
  { index: 1 }
);
