import { makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

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
      color: Color.primary,
      fontWeight: 'bold',
    },
    subtitle: {
      color: Color.black,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
