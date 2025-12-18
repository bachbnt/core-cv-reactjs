import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    backdrop: {
      zIndex: 1,
    },
    spinner: {
      color: theme.colors.primary,
    },
  })
);
