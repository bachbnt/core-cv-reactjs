import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      height: theme.spacing(6),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
