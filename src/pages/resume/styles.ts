import { makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    typography: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
