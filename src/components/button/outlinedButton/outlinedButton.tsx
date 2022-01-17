import clsx from 'clsx';
import Button from 'src/components/button/button';
import { Props } from './props';
import useStyles from './styles';

const OutlinedButton = (props: Props) => {
  const classes = useStyles();
  const { selected = false, ...others } = props;

  return (
    <Button
      variant='outlined'
      classes={{ root: selected ? classes.selected : classes.root }}
      className={clsx(classes.outline)}
      {...others}
    />
  );
};

export default OutlinedButton;
