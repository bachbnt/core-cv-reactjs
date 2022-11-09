import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

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
      },
    }),
  { index: 1 }
);
