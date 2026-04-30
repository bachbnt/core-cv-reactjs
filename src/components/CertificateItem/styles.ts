import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    card: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 680,
      },
    },
    img: {
      width: '100%',
      height: 'auto',
      display: 'block',
      [theme.breakpoints.up('md')]: {
        height: 520,
        objectFit: 'contain',
      },
    },
  }),
);
