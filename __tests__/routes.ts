import { UserRole } from '@/types/enums/userRole';
import { Method } from 'better-auth/*';

const randomId = crypto.randomUUID();
const randomNumberId = Math.floor(Math.random() * 100);


export const authEndPoints: {url: string, method: Method, onlyFor?: UserRole[],}[] = [
  { url: `api/users/${randomId}`, method: 'GET', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/users/${randomId}`, method: 'PATCH', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/users/${randomId}`, method: 'DELETE', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/users/${randomId}`, method: 'POST', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/initiatives`, method: 'GET' },
  { url: `api/initiatives`, method: 'POST', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/initiatives/${randomNumberId}`, method: 'GET', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/initiatives/${randomNumberId}`, method: 'PATCH', onlyFor: [UserRole.CONTRIBUTOR] },
  { url: `api/initiatives/${randomNumberId}`, method: 'DELETE', onlyFor: [UserRole.CONTRIBUTOR] },
];