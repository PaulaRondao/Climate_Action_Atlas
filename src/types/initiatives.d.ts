import { Initiative, InitiativeLocation, User } from '@prisma/client';

export interface InitiativeWithRelations extends Initiative {
  initiativeLocation: InitiativeLocation;
  user: User;
}
