import React from 'react';
import InitiativeCreationTemplate from '@/components/templates/InitiativeCreationTemplate/InitiativeCreationTemplate';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth/authOptions';
import { Navigation } from '@/components/organisms';

export default async function InitiativeCreationHome() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <InitiativeCreationTemplate />;
    </>
  );
}
