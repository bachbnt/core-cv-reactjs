import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) => ({
    container: {
      width: '100%',
      height: window.innerHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: ' center',
    },
  }),
  { index: 1 }
);
