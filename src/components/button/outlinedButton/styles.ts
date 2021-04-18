import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../../styles/color';

export default makeStyles((theme) =>
  createStyles({
    root: {
      color: Color.white,
      borderColor: Color.primary,
    },
    selected: {},
    outline: {
      borderWidth: 2,
    },
  })
);
