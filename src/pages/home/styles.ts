import { makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles(
  (theme) => ({
    primary: {
      color: Color.primary,
    },
    bold: {
      fontWeight: 'bold',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      alignContent: 'center',
      backgroundColor: Color.grey,
    },
  }),
  { index: 1 }
);
