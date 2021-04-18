import { makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles(
  (theme) => ({
    drawer: {
      width: 300,
      background: Color.primary,
      height: '100%',
    },
    avatar: {
      display: 'block',
      margin: '0.5 rem auto',
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    unselectedTitle: {
      color: Color.white,
      fontWeight: 'bold',
    },
    unselectedIcon: {
      color: Color.white,
      fontSize: 24,
    },
    selectedTitle: {
      color: Color.primary,
      fontWeight: 'bold',
    },
    selectedIcon: {
      color: Color.primary,
      fontSize: 24,
    },
    root: {
      '&$selected': {
        backgroundColor: Color.white,
        '&:hover': {
          backgroundColor: Color.black,
        },
      },
      '&:hover': {
        backgroundColor: Color.black,
      },
    },
    selected: {},
  }),
  { index: 1 }
);
