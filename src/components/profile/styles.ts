import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '5rem',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '10rem',
    },
  },
  avatar: {
    width: theme.spacing(36),
    height: theme.spacing(36),
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(54),
      height: theme.spacing(54),
    },
  },
  info: {
    textAlign: 'justify',
    color: color.white,
    marginTop: '2rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      marginLeft: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 0,
      marginLeft: '5rem',
    },
  },
}));
