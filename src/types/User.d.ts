export interface UserLoginForm {
  email: string;
  password: string;
}

export interface UserCreate {
  email: string;
  password: string;
}

export interface UserAccount {
  id?: any;
  userName: string;
  password?: string;
  loginAttempts?: number;
  updatedAt?: Date;
}
