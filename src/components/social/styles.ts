import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
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
    color: color.white,
    margin: '3rem 3rem',
  },
  textButton: {
    textTransform: 'none',
  },
  iconButton: {
    color: color.white,
    fontSize: 72,
    marginRight: '1rem',
  },
}));
