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
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    contactContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    messageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    primary: {
      color: theme.colors.primary,
    },
    center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '100%',
      backgroundColor: theme.colors.grey,
      marginTop: theme.spacing(6),
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
  }),
  { index: 1 }
);
