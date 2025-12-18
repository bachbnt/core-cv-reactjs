import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    dialogImg: {
      maxHeight: 600,
      objectFit: 'contain',
    },
  })
);
