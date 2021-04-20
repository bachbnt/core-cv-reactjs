import { IconButton as MuiIconButton } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const IconButton = (props: Props) => {
  const classes = useStyles();

  return <MuiIconButton classes={{ root: classes.root }} {...props} />;
};

export default IconButton;
