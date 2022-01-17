import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from 'src/themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        color: Color.white,
        '&:hover': {
          color: Color.secondary,
        },
      },
      selected: {
        color: Color.primary,
      },
    }),
  { index: 1 }
);
