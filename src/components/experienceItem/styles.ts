import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) =>
    createStyles({
      background: {
        padding: '12px 24px 12px 24px',
        backgroundColor: theme.colors.grey,
        '&:hover': {
          backgroundColor: theme.colors.black,
        },
      },
      primary: {
        color: theme.colors.primary,
      },
      secondary: {
        color: theme.colors.secondary,
      },
      bold: {
        fontWeight: 'bold',
      },
    }),
  { index: 1 }
);
