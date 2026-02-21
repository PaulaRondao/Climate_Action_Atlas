import VerifyEmailTemplate from '@/components/templates/VerifyEmailTemplate/VerifyEmailTemplate';
import React from 'react';

export default async function SignUpPage(props: {
  searchParams: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  return <VerifyEmailTemplate email={searchParams.email} />;
}
