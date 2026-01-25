'use client';

import StyledComponentsRegistry from '../lib/registry';
import Providers from './providers';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Providers>{children}</Providers>
    </StyledComponentsRegistry>
  );
}
