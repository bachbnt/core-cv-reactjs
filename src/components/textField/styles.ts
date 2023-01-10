import { createStyles, makeStyles } from '@material-ui/core';
import { AppTheme } from '@themes/themes';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      '& .MuiInputBase-root': {
        color: theme.colors.white,
      },
      '& .MuiFormLabel-root': {
        color: theme.colors.white,
        '&.Mui-focused': {
          color: theme.colors.primary,
        },
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.colors.white,
          borderWidth: 2,
        },
        '&:hover fieldset': {
          borderColor: theme.colors.secondary,
          borderWidth: 2,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.colors.primary,
          borderWidth: 2,
        },
      },
      '& .Mui-error': {
        color: theme.colors.secondary,
      },
    },
  })
);
