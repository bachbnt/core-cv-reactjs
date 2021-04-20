import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles((theme) =>
  createStyles({
    container: {
      height: 48,
      backgroundColor: Color.primary,
    },
  })
);
