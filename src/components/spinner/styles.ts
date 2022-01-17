import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from 'src/themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      backdrop: {
        zIndex: 1,
      },
      spinner: {
        color: Color.primary,
      },
    }),
  { index: 1 }
);
