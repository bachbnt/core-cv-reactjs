import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: 300,
        height: 150,
      },
      background: {
        alignItems: 'center',
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  { index: 1 }
);
