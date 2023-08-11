import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VlogInterface {
  id?: string;
  title: string;
  url: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VlogGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  url?: string;
  user_id?: string;
}
