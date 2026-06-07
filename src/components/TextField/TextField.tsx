/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import useStyles from './styles';

type Props = TextFieldProps;

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
