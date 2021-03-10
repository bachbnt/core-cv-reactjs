import { makeStyles } from '@material-ui/core';
import { color } from '../../shared/color';

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
    tile: {
      color: color.white,
    },
  }),
  { index: 1 }
);
