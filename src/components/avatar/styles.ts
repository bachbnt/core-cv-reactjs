import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: theme.spacing(36),
        height: theme.spacing(36),
        [theme.breakpoints.up('md')]: {
          width: theme.spacing(48),
          height: theme.spacing(48),
        },
      },
    }),
  { index: 1 }
);
