import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        color: theme.colors.white,
        borderColor: theme.colors.primary,
        '&:hover': {
          backgroundColor: theme.colors.secondary,
        },
      },
      selected: {},
      outline: {
        borderWidth: 2,
      },
    }),
  { index: 1 }
);
