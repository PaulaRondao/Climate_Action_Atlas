import { Initiative, InitiativeLocation, User } from '@prisma/client';

export interface InitiativeWithRelations extends Initiative {
  initiativeLocation?: InitiativeLocation | null;
  user?: User | null;
}
