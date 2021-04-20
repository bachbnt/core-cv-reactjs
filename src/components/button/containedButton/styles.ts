import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles((theme) =>
  createStyles({
    root: {
      color: Color.white,
      backgroundColor: Color.primary,
      '&:hover': {
        backgroundColor: Color.secondary,
      },
    },
    selected: {},
  })
);
