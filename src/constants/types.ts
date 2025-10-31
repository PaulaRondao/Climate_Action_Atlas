import { Initiatives } from '../types/enums/enums';
import { User as UserModel } from '@prisma/client';

// Types de base
export type IUser = UserModel;

// DTOs
export type CreateUserDTO = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO = Partial<
  Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>
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
  type?: Initiatives;
  status?: InitiativeStatus;
  country?: string;
  city?: string;
}
