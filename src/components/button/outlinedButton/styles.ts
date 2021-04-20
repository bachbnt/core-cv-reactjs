import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles((theme) =>
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
  })
);
