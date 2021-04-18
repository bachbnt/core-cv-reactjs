import { User } from './user';

export interface Response {
  status: number;
  data?: User;
  message?: string;
}
