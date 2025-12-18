import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
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
