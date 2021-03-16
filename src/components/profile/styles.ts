import { makeStyles } from '@material-ui/core';
import { color } from '../../commons/color';

export default makeStyles(
  (theme) => ({
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: '2rem 2rem 0 2rem',
      [theme.breakpoints.up('sm')]: {
        margin: '3rem 3rem 0 3rem',
      },
      [theme.breakpoints.up('md')]: {
        margin: '5rem 5rem 0 5rem',
        flexDirection: 'row',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '10rem 10rem 0 10rem ',
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
        marginLeft: '7rem',
      },
    },
  }),
  { index: 1 }
);
