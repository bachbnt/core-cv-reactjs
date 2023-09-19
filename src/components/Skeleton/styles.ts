import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.white,
    },
  })
);
