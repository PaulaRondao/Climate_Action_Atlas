'use client';

import ClientLayout from '@/app/client-layout';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body>
        <SessionProvider>
          <ClientLayout>{children}</ClientLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
