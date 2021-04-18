import { Button } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const ContainedButton = (props: Props) => {
  const classes = useStyles();
  const { selected = false, ...others } = props;

  return (
    <Button
      variant='contained'
      classes={{ root: selected ? classes.selected : classes.root }}
      {...others}
    />
  );
};

export default ContainedButton;
