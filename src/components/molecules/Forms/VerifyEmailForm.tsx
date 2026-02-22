'use client';

import { CardContainer } from '../Card/Card-with-logo/cardWithLogo.styles';
import { CardContent } from '../Card/Card-with-image/cardWithImage.styles';

export function VerifyEmailForm({ email }: { email?: string }) {
  return (
    <CardContainer>
      <div>
        <p>Important, vérifie ton email</p>
      </div>
      {email ? (
        <CardContent>Nous t'envoyons un email au {email}</CardContent>
      ) : null}
    </CardContainer>
  );
}
