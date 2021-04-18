import { Avatar as MuiAvatar } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Avatar = (props: Props) => {
  const classes = useStyles();

  return <MuiAvatar classes={{ root: classes.root }} {...props} />;
};

export default Avatar;
