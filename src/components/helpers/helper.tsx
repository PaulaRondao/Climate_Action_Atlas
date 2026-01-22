import { InitiativeWithRelations } from '@/types/initiatives';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const formattedDate = (value: InitiativeWithRelations) => {
  return new Date(value.updatedAt).toLocaleString();
};
