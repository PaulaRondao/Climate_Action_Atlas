import { UserRole } from '@/types/enums/userRole';
import { UserProfil } from '@/types/User';

export const isRuleAllowed = (
  user: UserProfil | null,
  userRule: UserRole[],
): boolean | undefined => {
  if (!user?.id) return false;

  if (!user.role) return false;

  return userRule.includes(user.role);
};
