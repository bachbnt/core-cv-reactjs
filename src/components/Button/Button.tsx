import { Button as MuiButton } from '@mui/material';
import Props from './props';
import useStyles from './styles';

const Button = (props: Props) => {
  const classes = useStyles();

  return <MuiButton classes={{ root: classes.root }} {...props} />;
};

export default Button;
