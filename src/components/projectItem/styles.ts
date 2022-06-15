import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      card: {
        width: 350,
        height: 400,
      },
      img: {
        height: 200,
      },
    }),
  { index: 1 }
);
