import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles(
  (theme: Theme) =>
    createStyles({
      container: {
        height: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  { index: 1 }
);
