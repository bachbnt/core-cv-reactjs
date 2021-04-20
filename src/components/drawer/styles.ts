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
    },
    selectedListItem: {
      color: Color.primary,
    },
  }),
  { index: 1 }
);
