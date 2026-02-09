import { Initiative } from '@prisma/client';
import { UserRole } from './enums/userRole';

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserForgetPassword {
  email: string;
  newPassword?: string;
}

export interface UserResetPassword {
  password: string;
  token: string;
}

export interface UserProfil {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  loginAttempts: number;
  sessions: UserSession;
  accounts: UserAccount;
  initiative: Initiative;
  role?: UserRole;
}

export interface UserAccount {
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  user: UserProfil;
  accesToken?: string;
  refreshToken?: string;
  idToken?: string;
  accessTokenExpiresAt?: Date;
  refreshTokenExpriresAt?: Date;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSession {
  id: string;
  expiresAt: Date;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: UserProfil;
}

export interface UserParams {
  id: string;
}
