import { createStyles, makeStyles } from '@material-ui/core';
import colors from '@themes/colors';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    card: {
      width: 350,
      height: 500,
    },
    img: {
      maxWidth: 300,
      maxHeight: 350,
      width: 'auto',
    },
    button: {
      textTransform: 'none',
    },
    copyAllButton: {
      alignSelf: 'flex-end',
      color: colors.primary,
    },
  })
);
