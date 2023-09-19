import { Skeleton as MuiSkeleton } from '@material-ui/lab';
import Props from './props';
import useStyles from './styles';

const Skeleton = (props: Props) => {
  const classes = useStyles();

  return <MuiSkeleton classes={{ root: classes.root }} {...props} />;
};

export default Skeleton;
