import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      img: {
        width: '100%',
      },
    }),
  { index: 1 }
);
