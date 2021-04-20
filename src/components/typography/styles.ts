import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        color: Color.white,
      },
    }),
  { index: 1 }
);
