import { Backdrop, CircularProgress } from '@material-ui/core';
import { useAppSelector } from 'src/redux/store';
import { Props } from './props';
import useStyles from './styles';

const Spinner = (props: Props) => {
  const classes = useStyles();
  const visible = useAppSelector((state) => state.spinnerReducer.visible);
  if (!props.visible && !visible) {
    return null;
  }

  return (
    <Backdrop classes={{ root: classes.backdrop }} open={true}>
      <CircularProgress classes={{ root: classes.spinner }} />
    </Backdrop>
  );
};

export default Spinner;
