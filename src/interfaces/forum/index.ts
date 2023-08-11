import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ForumInterface {
  id?: string;
  title: string;
  description: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ForumGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
}
