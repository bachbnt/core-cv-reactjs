import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    desktop: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    mobile: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },
    button: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    cvButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  })
);
