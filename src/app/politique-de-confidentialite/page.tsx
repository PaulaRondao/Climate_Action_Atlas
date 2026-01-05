import React from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth/authOptions';
import { Navigation } from '@/components/organisms';
import { LegacyPolicyPage } from '@/components/templates';

export default async function LegacyPolicy() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <LegacyPolicyPage />
    </>
  );
}
