import { InitiativeWithRelations } from '@/types/initiatives';

export const formattedDate = (value: InitiativeWithRelations) => {
  return new Date(value.updatedAt).toLocaleString();
};
