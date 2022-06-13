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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        display: 'block',
        marginTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    greeting: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'start',
      },
    },
    leftButton: {
      marginRight: theme.spacing(2),
    },
    rightButton: {
      marginLeft: theme.spacing(2),
    },
  }),
  { index: 1 }
);
