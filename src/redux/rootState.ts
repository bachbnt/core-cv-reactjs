import { SpinnerState } from './spinner/spinnerState';
import { UserState } from './user/userState';

export interface RootState {
  SpinnerReducer: SpinnerState;
  UserReducer: UserState;
}
