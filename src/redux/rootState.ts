import { SpinnerState } from './spinner/spinnerState';
import { UserState } from './user/userState';

export interface RootState {
  spinnerReducer: SpinnerState;
  userReducer: UserState;
}
