import { Button as MuiButton } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Button = (props: Props) => {
  const classes = useStyles();
  const { selected = false, ...others } = props;

  return (
    <MuiButton
      classes={{ root: selected ? classes.selected : classes.root }}
      {...others}
    />
  );
};

export default Button;
