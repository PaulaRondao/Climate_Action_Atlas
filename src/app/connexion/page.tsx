import { Suspense } from 'react';
import SignInTemplate from '@/components/templates/SignInTemplate/SignInTemplate';

export default function SignIn(): JSX.Element {
  return (
    <Suspense fallback="Loading...">
      <SignInTemplate />
    </Suspense>
  );
}
