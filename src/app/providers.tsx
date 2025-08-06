'use client';

import { GlobalStyle } from '@/styles/globalStyles';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
