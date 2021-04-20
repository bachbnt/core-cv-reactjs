import { makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    primary: {
      color: Color.primary,
    },
    bold: {
      fontWeight: 'bold',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  }),
  { index: 1 }
);
