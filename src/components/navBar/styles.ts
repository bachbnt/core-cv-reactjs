import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    background: '#222',
  },
  hamburger: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'absolute',
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    position: 'absolute',
    right: 0,
  },
  button: {
    fontWeight: 'bold',
  },
}));
