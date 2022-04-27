import { ConfigState } from './config/configState';
import { SpinnerState } from './spinner/spinnerState';
import { UserState } from './user/userState';

export interface RootState {
  configReducer: ConfigState;
  spinnerReducer: SpinnerState;
  userReducer: UserState;
}
