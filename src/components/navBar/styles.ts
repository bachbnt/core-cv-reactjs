import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles(
  (theme) => ({
    appBar: {},
    hamburgerButton: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'inline',
      },
      position: 'absolute',
      right: 0,
    },
    hamburgerIcon: {
      color: color.white,
    },
    actionBar: {
      display: 'inline',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      position: 'absolute',
      right: 0,
    },
    actionButton: {
      color: color.white,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
