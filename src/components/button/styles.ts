import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles((theme) =>
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
  })
);
