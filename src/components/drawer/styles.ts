import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) => ({
    paper: {
      background: theme.colors.grey,
    },
    list: {
      width: 200,
    },
    listItem: {
      color: theme.colors.white,
      '&:hover': {
        backgroundColor: theme.colors.secondary,
      },
    },
    selectedListItem: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
