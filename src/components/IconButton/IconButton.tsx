/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { IconButton as MuiIconButton } from '@mui/material';
import Props from './props';
import useStyles from './styles';

const IconButton = (props: Props) => {
  const classes = useStyles();

  return <MuiIconButton classes={{ root: classes.root }} {...props} />;
};

export default IconButton;
