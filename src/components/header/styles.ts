import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
  },
}));
