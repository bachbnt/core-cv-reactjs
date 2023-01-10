import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      card: {
        width: 350,
        height: 500,
      },
      img: {
        maxWidth: 350,
        maxHeight: 350,
        width: 'auto',
      },
    }),
  { index: 1 }
);
