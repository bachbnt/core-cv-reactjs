import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../themes/color';

export default makeStyles(() =>
  createStyles({
    backdrop: {
      zIndex: 1,
    },
    spinner: {
      color: Color.primary,
    },
  })
);
