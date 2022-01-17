import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from 'src/themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        color: Color.white,
        backgroundColor: Color.primary,
        '&:hover': {
          backgroundColor: Color.secondary,
        },
      },
      selected: {},
    }),
  { index: 1 }
);
