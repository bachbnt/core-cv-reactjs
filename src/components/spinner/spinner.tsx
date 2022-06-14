import { Backdrop, CircularProgress } from '@material-ui/core';
import { useAppSelector } from 'src/redux/store';
import Props from './props';
import useStyles from './styles';

const Spinner = (props: Props) => {
  const { visible = false } = props;
  const classes = useStyles();
  const spinnerVisible = useAppSelector(
    (state) => state.spinnerReducer.visible
  );
  if (!visible && !spinnerVisible) {
    return null;
  }

  return (
    <Backdrop classes={{ root: classes.backdrop }} open={true}>
      <CircularProgress classes={{ root: classes.spinner }} />
    </Backdrop>
  );
};

export default Spinner;
