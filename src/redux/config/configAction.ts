import { Config } from 'src/models/config';

export const SET_CONFIG = 'SET_CONFIG';

export interface SetConfigAction {
  type: typeof SET_CONFIG;
  payload: Config;
}

export type ConfigAction = SetConfigAction;
