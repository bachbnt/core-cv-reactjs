import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 350,
      height: '100%',
    },
    background: {
      backgroundColor: Color.grey,
      '&:hover': {
        backgroundColor: Color.black,
      },
    },
    primary: {
      color: Color.primary,
    },
    bold: {
      fontWeight: 'bold',
    },
  })
);
