import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      container: {
        height: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  { index: 1 }
);
