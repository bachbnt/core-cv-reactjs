import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles((theme) => ({
  container: {
    margin: '3rem auto 3rem',
  },
  paper: {
    padding: '16px 24px',
  },
  title: {
    color: color.primary,
    fontWeight: 'bold',
  },
  text: {
    color: color.white,
  },
}));
