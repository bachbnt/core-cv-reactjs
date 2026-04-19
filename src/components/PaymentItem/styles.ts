import { createStyles, makeStyles } from '@mui/styles';
import colors from '@themes/colors';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    card: {
      width: 350,
      height: 500,
    },
    img: {
      maxWidth: 300,
      maxHeight: 350,
      width: 'auto',
    },
    account: {
      flex: 1,
      overflow: 'hidden',
      wordBreak: 'break-all',
    },
    copyButton: {
      flexShrink: 0,
      color: colors.primary,
    },
    copyAllButton: {
      alignSelf: 'flex-end',
      color: colors.primary,
    },
  })
);
