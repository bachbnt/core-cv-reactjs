import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      root: {},
      toolbar: {
        justifyContent: 'space-between',
      },
      row: {
        display: 'flex',
      },
      hamburger: {
        color: theme.colors.white,
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
      button: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        zIndex: 10000,
      },
    }),
  { index: 1 }
);
