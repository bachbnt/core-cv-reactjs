import { createStyles, makeStyles } from '@material-ui/core';
import { Color } from '../../styles/color';

export default makeStyles((theme) =>
  createStyles({
    background: {
      padding: '12px 24px 12px 24px',
      backgroundColor: Color.grey,
      '&:hover': {
        backgroundColor: Color.black,
      },
    },
    primary: {
      color: Color.primary,
    },
    secondary: {
      color: Color.secondary,
    },
    bold: {
      fontWeight: 'bold',
    },
  })
);
