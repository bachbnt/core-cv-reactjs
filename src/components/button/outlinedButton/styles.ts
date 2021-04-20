import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        color: Color.white,
        borderColor: Color.primary,
        '&:hover': {
          backgroundColor: Color.secondary,
        },
      },
      selected: {},
      outline: {
        borderWidth: 2,
      },
    }),
  { index: 1 }
);
