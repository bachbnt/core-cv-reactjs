import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        width: 350,
        height: 250,
      },
      background: {
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
        justifyContent: 'center',
        alignItems: 'center',
      },
      description: {
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
      },
    }),
  { index: 1 }
);
