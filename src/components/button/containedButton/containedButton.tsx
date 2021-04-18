import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const ContainedButton = (props: Props) => {
  const classes = useStyles();

  return (
    <Button variant='contained' classes={{ root: classes.root }} {...props} />
  );
};

export default ContainedButton;
