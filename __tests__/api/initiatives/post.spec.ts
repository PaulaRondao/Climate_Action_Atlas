import { getSession } from '@/lib/auth-server';
import { POST } from '@/app/api/initiatives/route';
import prisma from '@/lib/prisma';
import config from '../../../src/services/config';
import { InitiativeType, User, UserRole } from '@prisma/client';
import { createTestUser } from '../../test-utils/user';
import { NextRequest } from 'next/server';

jest.mock('@/lib/auth-server', () => ({
  getSession: jest.fn(),
}));

describe('POST /api/initiatives', () => {
  let user: User;

  const body = {
    name: 'Green Project',
    description: 'Some description that is long enough',
    initiativeType: [InitiativeType.ClimateAgricultureEnergy],
    address: {
      city: 'Paris',
      label: '1 rue test, 75000 Paris',
      street: '1 rue test',
      zipCode: '75000',
      gps: [2.35, 48.85],
    },
  };

  beforeEach(async () => {
    user = await createTestUser();

    (getSession as jest.Mock).mockResolvedValue({
      session: { userId: user.id },
      user: { id: user.id, role: UserRole.CONTRIBUTOR },
    });
  });

  afterEach(async () => {
    await prisma.initiative.deleteMany();
    await prisma.user.deleteMany();
  });

  it('should create an initiative', async () => {
    const request = new NextRequest(`${config.baseUrl}/api/initiatives`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request, {
      params: Promise.resolve({}),
    });

    const data = await response.json();
    expect(response.status).toEqual(201);

    expect(data.type).toBe('success');

    const initiatives = await prisma.initiative.findMany();
    expect(initiatives).toHaveLength(1);
    expect(initiatives[0].contributorId).toBe(user.id);
    expect(initiatives[0].name).toBe('Green Project');
  });

  it('should fail if user is not connected', async () => {
    (getSession as jest.Mock).mockResolvedValueOnce(null);

    const request = new NextRequest(`${config.baseUrl}/api/initiatives`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request, {
      params: Promise.resolve({}),
    });

    expect(response.status).toEqual(400);
  });

  it('should fail with invalid body', async () => {
    const request = new NextRequest(`${config.baseUrl}/api/initiatives`, {
      method: 'POST',
      body: JSON.stringify({ name: '' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request, {
      params: Promise.resolve({}),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe('Invalid body parameters');
  });
});
