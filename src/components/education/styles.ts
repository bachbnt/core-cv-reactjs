import { makeStyles } from '@material-ui/core';
import { color } from '../../commons/color';

export default makeStyles(
  (theme) => ({
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
    subtitle: {
      color: color.black,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
