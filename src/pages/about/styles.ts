import { makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) => ({
  infoContainer: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(12),
      paddingRight: 0,
    },
  },
  img: {
    width: theme.spacing(30),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(48),
    },
  },
  imgContainer: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
  skillText: {
    textTransform: 'capitalize',
    textAlign: 'start',
  },
}));
