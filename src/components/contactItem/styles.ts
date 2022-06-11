import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        width: 300,
        height: 150,
      },
      background: {
        alignItems: 'center',
        backgroundColor: theme.colors.grey,
        '&:hover': {
          backgroundColor: theme.colors.black,
        },
      },
      primary: {
        color: theme.colors.primary,
      },
      bold: {
        fontWeight: 'bold',
      },
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  { index: 1 }
);
