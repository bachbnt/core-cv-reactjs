import { makeStyles } from '@material-ui/core';
import { color } from '../../commons/color';

export default makeStyles((theme) => ({
  container: {
    margin: '0 2rem 2rem 2rem',
    [theme.breakpoints.up('sm')]: {
      margin: '0 3rem 3rem 3rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 5rem 5rem 5rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '3rem 10rem 10rem 10rem',
    },
  },
  list: {
    paddingBottom: '3rem',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2rem',
  },
  text: {
    color: color.white,
    fontWeight: 'bold',
  },
  icon: {
    color: color.white,
    fontSize: 36,
    marginRight: '1rem',
  },
}));
