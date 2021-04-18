import { makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles((theme) => ({
  container: {
    padding: '2rem',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '10rem',
    },
  },
  list: {
    paddingBottom: '3rem',
  },
  button: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: Color.white,
    margin: '3rem 3rem',
  },
  textButton: {
    textTransform: 'none',
  },
  iconButton: {
    color: Color.white,
    fontSize: 72,
    marginRight: '1rem',
  },
}));
