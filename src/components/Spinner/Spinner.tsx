/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Backdrop, CircularProgress } from '@mui/material';
import { useSpinnerVisible } from '@stores/uiStore';
import Props from './props';
import useStyles from './styles';

const Spinner = (props: Props) => {
  const { visible = false } = props;
  const classes = useStyles();
  const spinnerVisible = useSpinnerVisible();
  if (!visible && !spinnerVisible) {
    return null;
  }

  return (
    <Backdrop classes={{ root: classes.backdrop }} open={true}>
      <CircularProgress classes={{ root: classes.spinner }} />
    </Backdrop>
  );
};

export default Spinner;
