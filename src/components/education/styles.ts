import { makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles(
  (theme) => ({
    container: {
      margin: '3rem auto 3rem',
    },
    paper: {
      padding: '16px 24px',
    },
    title: {
      color: Color.primary,
      fontWeight: 'bold',
    },
    text: {
      color: Color.white,
    },
    subtitle: {
      color: Color.black,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
