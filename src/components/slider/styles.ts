import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  slider: {
    width: 300,
    background: '#222',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5 rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  tile: {
    color: 'white',
  },
}));
