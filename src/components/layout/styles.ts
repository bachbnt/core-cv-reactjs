import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
