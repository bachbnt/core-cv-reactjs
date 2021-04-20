import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../themes/color';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      background: {
        padding: '12px 24px 12px 24px',
        backgroundColor: Color.grey,
        '&:hover': {
          backgroundColor: Color.black,
        },
      },
      primary: {
        color: Color.primary,
      },
      secondary: {
        color: Color.secondary,
      },
      bold: {
        fontWeight: 'bold',
      },
    }),
  { index: 1 }
);
