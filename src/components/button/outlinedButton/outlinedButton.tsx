import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const OutlinedButton = (props: Props) => {
  const classes = useStyles();

  return (
    <Button variant='outlined' classes={{ root: classes.root }} {...props} />
  );
};

export default OutlinedButton;
