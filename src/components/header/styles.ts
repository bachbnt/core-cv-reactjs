import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles((theme) =>
  createStyles({
    root: {},
    bold: {
      fontWeight: 'bold',
    },
    toolbar: {
      justifyContent: 'flex-end',
    },
    hamburger: {
      color: Color.white,
    },
    desktop: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    mobile: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
      },
    },
  })
);
