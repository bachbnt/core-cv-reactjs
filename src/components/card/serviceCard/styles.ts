import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: 350,
        height: 250,
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
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  { index: 1 }
);
