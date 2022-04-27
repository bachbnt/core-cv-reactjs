import { SET_CONFIG, ConfigAction } from './configAction';
import { initialState, ConfigState } from './configState';

export const configReducer = (
  state: ConfigState = initialState,
  action: ConfigAction
): ConfigState => {
  switch (action.type) {
    case SET_CONFIG:
      return action.payload;
    default:
      return state;
  }
};
