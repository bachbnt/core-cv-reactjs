import { makeStyles } from '@material-ui/core';
import { color } from '../../commons/color';

export default makeStyles(
  (theme) => ({
    drawer: {
      width: 300,
      background: color.primary,
      height: '100%',
    },
    avatar: {
      display: 'block',
      margin: '0.5 rem auto',
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    unselectedTitle: {
      color: color.white,
      fontWeight: 'bold',
    },
    unselectedIcon: {
      color: color.white,
      fontSize: 24,
    },
    selectedTitle: {
      color: color.primary,
      fontWeight: 'bold',
    },
    selectedIcon: {
      color: color.primary,
      fontSize: 24,
    },
    root: {
      '&$selected': {
        backgroundColor: color.white,
        '&:hover': {
          backgroundColor: color.black,
        },
      },
      '&:hover': {
        backgroundColor: color.black,
      },
    },
    selected: {},
  }),
  { index: 1 }
);
