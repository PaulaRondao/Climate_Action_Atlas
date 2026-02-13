import { prismaMock } from '../../../singleton';
import { updateUser } from './update';
import { UserRole } from '@prisma/client';

describe('updateUser', () => {
  test('should update a user name', async () => {
    const userId = '12345678';
    const updateData = { name: 'Laura' };

    const expectedUser = {
      id: '12345678',
      name: 'Laura',
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

  test('should not update multiple fields', async () => {
    const userId = '12345678';
    const updateData = {
      name: 'Marie',
      email: 'marie@mail.com',
    };

    const expectedUser = {
      id: userId,
      name: 'Marie',
      email: 'marie@mail.com',
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
