import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem',
    },
  },
  avatar: {
    width: theme.spacing(54),
    height: theme.spacing(54),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(36),
      height: theme.spacing(36),
    },
  },
  info: {
    textAlign: 'justify',
    color: color.white,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
      marginLeft: 0,
    },
  },
}));
