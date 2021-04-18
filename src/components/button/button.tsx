import { Button as MaterialButton } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Button = (props: Props) => {
  const classes = useStyles();

  return <MaterialButton classes={{ root: classes.root }} {...props} />;
};

export default Button;
