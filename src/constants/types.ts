import { InitiativeType, UserRole, ResponseOption } from './enums';
import {
  UserAccount as UserModel,
  CompanyAccount as CompanyModel,
} from '@prisma/client';

// Types de base
export type IUser = UserModel;
export type ICompany = CompanyModel;

// DTOs
export type CreateUserDTO = Omit<
  IUser,
  'userAccountId' | 'createdAt' | 'updatedAt' | 'lastConnect'
>;
export type UpdateUserDTO = Partial<
  Omit<IUser, 'userAccountId' | 'createdAt' | 'updatedAt'>
>;

export type CreateCompanyDTO = Omit<
  ICompany,
  'companyAccountId' | 'createdAt' | 'updatedAt'
>;
export type UpdateCompanyDTO = Partial<
  Omit<ICompany, 'companyAccountId' | 'createdAt' | 'updatedAt'>
>;

// Types d'état
export type InitiativeStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'PENDING';

// Types utilitaires
export type SortDirection = 'asc' | 'desc';
export type FilterOperator =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'contains'
  | 'startsWith'
  | 'endsWith';

// Interfaces de paramètres
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortDirection?: SortDirection;
}

export interface InitiativeFilters {
  type?: InitiativeType;
  status?: InitiativeStatus;
  country?: string;
  city?: string;
}

export interface UserFilters {
  role?: UserRole;
  status?: UserStatus;
}
