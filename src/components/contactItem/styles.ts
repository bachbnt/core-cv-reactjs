import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      card: {
        width: 300,
        height: 150,
      },
    }),
  { index: 1 }
);
