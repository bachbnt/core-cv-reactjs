import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      card: {
        width: 350,
        height: 400,
      },
      img: {
        height: 200,
        objectFit: 'contain',
      },
      dialogImg: {
        maxHeight: 600,
        objectFit: 'contain',
      },
    }),
  { index: 1 }
);
