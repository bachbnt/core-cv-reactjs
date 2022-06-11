import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {},
      bold: {
        fontWeight: 'bold',
      },
      toolbar: {
        justifyContent: 'space-between',
      },
      row: {
        display: 'flex',
      },
      hamburger: {
        color: theme.colors.white,
      },
      cv: {
        marginRight: theme.spacing(2),
      },
      desktop: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      mobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
      },
    }),
  { index: 1 }
);
