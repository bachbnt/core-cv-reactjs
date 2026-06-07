/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Avatar as MuiAvatar } from '@mui/material';
import type { AvatarProps } from '@mui/material';
import useStyles from './styles';

type Props = AvatarProps;

const Avatar = (props: Props) => {
  const classes = useStyles();

  return <MuiAvatar classes={{ root: classes.root }} {...props} />;
};

export default Avatar;
