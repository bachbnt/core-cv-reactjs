import { makeStyles } from '@material-ui/core';
import { color } from '../../commons/color';

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
      fontSize: 24,
    },
    actionBar: {
      display: 'inline',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      position: 'absolute',
      right: 0,
    },
    unselectedActionButton: {
      color: color.white,
      fontWeight: 'bold',
    },
    selectedActionButton: {
      color: color.primary,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
