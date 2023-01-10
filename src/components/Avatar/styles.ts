import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      width: theme.spacing(36),
      height: theme.spacing(36),
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(48),
        height: theme.spacing(48),
      },
    },
  })
);
