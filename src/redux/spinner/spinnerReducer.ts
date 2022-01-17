import { HIDE_SPINNER, SHOW_SPINNER, SpinnerAction } from './spinnerAction';
import { initialState, SpinnerState } from './spinnerState';

export const spinnerReducer = (
  state: SpinnerState = initialState,
  action: SpinnerAction
): SpinnerState => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        visible: true,
      };
    case HIDE_SPINNER:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
