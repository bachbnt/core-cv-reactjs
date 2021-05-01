import { makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../themes/color';

export default makeStyles(
  (theme: Theme) => ({
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
    },
    messageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    primary: {
      color: Color.primary,
    },
    center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '100%',
      backgroundColor: Color.grey,
      marginTop: theme.spacing(6),
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
  }),
  { index: 1 }
);
