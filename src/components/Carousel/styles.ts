import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {},
    indicator: {
      color: `${theme.colors.grey} !important`, // Using grey for inactive
      '& .MuiSvgIcon-root': {
        color: '#9E9E9E !important', // Hardcoded grey to match requested
      },
      opacity: '0.6 !important',
    },
    activeIndicator: {
      color: `${theme.palette.primary.main} !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.primary.main} !important`,
      },
      opacity: '1 !important',
    },
  })
);
