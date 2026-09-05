export type UserContext = 'PRODUCT_PROVIDER' | 'SERVICE_PROVIDER' | 'BUYER';
export type UserRole = UserContext | 'ADMIN';

export interface User {
  id: number;
  name: string;
  email?: string;
  context: UserContext;
  roles: UserRole[];
  accountType: 'INDIVIDUAL' | 'BUSINESS';
}

export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  city?: string;
  context: UserContext;
}