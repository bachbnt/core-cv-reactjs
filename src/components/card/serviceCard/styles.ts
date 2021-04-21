import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../../themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        maxWidth: 350,
        minWidth: 300,
        height: '100%',
        minHeight: 200,
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