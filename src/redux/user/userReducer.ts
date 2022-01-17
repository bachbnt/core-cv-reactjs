import { SET_USER, UserAction } from './userAction';
import { initialState, UserState } from './userState';

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
