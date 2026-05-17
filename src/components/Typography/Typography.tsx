/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Typography as MuiTypography } from '@mui/material';
import Props from './props';
import useStyles from './styles';

const Typography = (props: Props) => {
  const classes = useStyles();
  return <MuiTypography classes={{ root: classes.root }} {...props} />;
};

export default Typography;
