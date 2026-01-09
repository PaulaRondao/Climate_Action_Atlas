import { Navigation } from '@/components/organisms';
import LegacyPolicyTemplate from '@/components/templates/LegacyPolicyTemplate/LegacyPolicyTemplate';
import { authOptions } from '@/lib/next-auth/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';


export default async function LegacyPolicy() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <LegacyPolicyTemplate />
    </>
  );
}
