import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  { index: 1 }
);
