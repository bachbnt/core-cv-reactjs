import { makeStyles, Theme } from '@material-ui/core';
import { Color } from 'src/themes/color';

export default makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    typography: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    primary: {
      color: Color.primary,
    },
  }),
  { index: 1 }
);
