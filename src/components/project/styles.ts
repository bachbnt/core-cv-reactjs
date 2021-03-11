import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

export default makeStyles(
  (theme) => ({
    container: {},
    list: {
      paddingBottom: '3rem',
    },
    card: {
      maxWidth: 345,
      height: '100%',
      margin: '3rem 5rem auto',
    },
    title: {
      color: color.primary,
      fontWeight: 'bold',
    },
    subtitle: {
      color: color.black,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
