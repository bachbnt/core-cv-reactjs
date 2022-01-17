import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Color } from 'src/themes/color';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiInputBase-root': {
        color: Color.white,
      },
      '& .MuiFormLabel-root': {
        color: Color.white,
        '&.Mui-focused': {
          color: Color.primary,
        },
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: Color.white,
          borderWidth: 2,
        },
        '&:hover fieldset': {
          borderColor: Color.secondary,
          borderWidth: 2,
        },
        '&.Mui-focused fieldset': {
          borderColor: Color.primary,
          borderWidth: 2,
        },
      },
      '& .Mui-error': {
        color: Color.secondary,
      },
    },
  })
);
