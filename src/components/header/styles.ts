import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from 'src/themes/color';

export default makeStyles(
  (theme: Theme) =>
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
        color: Color.white,
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
