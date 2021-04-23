import { Me } from '../../models/me';

export const SET_USER = 'SET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: Me;
}

export type UserAction = SetUserAction;
