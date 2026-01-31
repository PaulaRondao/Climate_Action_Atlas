export interface UserLoginForm {
  email: string;
  password: string;
}

export interface UserCreate {
  email: string;
  password: string;
}

export interface UserAccount {
  id?: number;
  userName: string;
  password?: string;
  loginAttempts?: number;
  updatedAt?: Date;
}

export interface UserRegister {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
