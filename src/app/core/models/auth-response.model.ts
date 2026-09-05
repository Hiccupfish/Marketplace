import { User, UserContext, UserRole } from './user.model';

export interface AuthResponse {
  token: string;
  user: User;
}