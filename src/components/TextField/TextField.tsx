/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { TextField as MuiTextField } from '@mui/material';
import Props from './props';
import useStyles from './styles';

const TextField = (props: Props) => {
  const classes = useStyles();

  return (
    <MuiTextField
      classes={{ root: classes.root }}
      variant='outlined'
      fullWidth
      {...props}
    />
  );
};

export default TextField;
