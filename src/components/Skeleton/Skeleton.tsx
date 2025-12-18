import { Skeleton as MuiSkeleton } from '@mui/material';
import Props from './props';
import useStyles from './styles';

const Skeleton = (props: Props) => {
  const classes = useStyles();

  return <MuiSkeleton classes={{ root: classes.root }} {...props} />;
};

export default Skeleton;
