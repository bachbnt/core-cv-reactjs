import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    container: {
      width: '100%',
      height: window.innerHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: ' center',
    },
  }),
  { index: 1 }
);
