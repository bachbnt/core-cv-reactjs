import { makeStyles } from '@material-ui/core';
import { Color } from '../../themes/color';

export default makeStyles(
  (theme) => ({
    paper: {
      background: Color.grey,
    },
    list: {
      width: 200,
    },
    listItem: {
      color: Color.white,
      '&:hover': {
        backgroundColor: Color.secondary,
      },
    },
    selectedListItem: {
      color: Color.primary,
      fontWeight: 'bold',
    },
  }),
  { index: 1 }
);
