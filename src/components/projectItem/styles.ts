import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {
        width: 350,
        height: 400,
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
      img: {
        height: 200,
      },
      description: {
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
      },
    }),
  { index: 1 }
);
