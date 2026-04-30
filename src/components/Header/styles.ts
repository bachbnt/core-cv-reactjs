import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    desktop: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    mobile: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },
    button: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    cvButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      animation: '$logoPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
    },
    '@keyframes logoPop': {
      '0%': { transform: 'scale(0) rotate(-180deg)', opacity: 0 },
      '60%': { transform: 'scale(1.3) rotate(10deg)', opacity: 1 },
      '80%': { transform: 'scale(0.9) rotate(-5deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)', opacity: 1 },
    },
  }),
);
