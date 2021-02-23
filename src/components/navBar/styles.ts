import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles((theme) => ({
  appBar: {
    background: color.black,
  },
  hamburgerButton: {
    display: 'inline',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
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
    fontWeight: 'bold',
  },
}));
