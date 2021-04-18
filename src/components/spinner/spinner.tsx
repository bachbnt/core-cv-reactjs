import { Backdrop, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootState';
import { SpinnerState } from '../../redux/spinner/spinnerState';
import { Props } from './props';
import useStyles from './styles';

const Spinner = (props: Props) => {
  const classes = useStyles();
  const spinner = useSelector<RootState, SpinnerState>(
    (state) => state.SpinnerReducer
  );
  if (!props.visible && !spinner.visible) {
    return null;
  }

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default Spinner;
