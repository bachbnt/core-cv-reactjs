import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    titleBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    img: {
      width: '100%',
      objectFit: 'contain',
    },
  })
);
