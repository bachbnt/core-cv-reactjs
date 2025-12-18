import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.white,
    },
  })
);
