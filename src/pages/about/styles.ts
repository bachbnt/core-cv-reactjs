import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) => ({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    infoContainer: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(12),
        paddingRight: 0,
      },
    },
    primary: {
      color: theme.colors.primary,
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
    capitalize: {
      textTransform: 'capitalize',
    },
  }),
  { index: 1 }
);
