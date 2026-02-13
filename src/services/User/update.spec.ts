import { prismaMock } from '../../../singleton';
import { updateUser } from './update';
import { UserRole } from '@prisma/client';

describe('updateUser', () => {
  const userId = '12345678';

  test('should update a user name', async () => {
    const updateData = { name: 'Laura' };

    const expectedUser = {
      id: userId,
      name: 'Laura',
      email: 'laura@mail.com',
      emailVerified: false,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      loginAttempts: 0,
      role: UserRole.CONTRIBUTOR,
    };

    prismaMock.user.update.mockResolvedValue(expectedUser);

    const result = await updateUser(userId, updateData);

    expect(result).toEqual(expectedUser);
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: { id: userId },
      data: updateData,
    });
    expect(prismaMock.user.update).toHaveBeenCalledTimes(1);
  });
});
