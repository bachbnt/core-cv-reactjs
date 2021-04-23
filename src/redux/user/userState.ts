import { Me } from '../../models/me';

export type UserState = Me | null;

export const initialState: UserState = null;
