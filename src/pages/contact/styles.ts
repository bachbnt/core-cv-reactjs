import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) => ({
    contactContainer: {
      paddingLeft: 0,
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(6),
      },
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    messageContainer: {
      paddingRight: 0,
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(6),
      },
      justifyContent: 'center',
      alignItems: 'center',
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
