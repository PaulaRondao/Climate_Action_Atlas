'use client';

import ClientLayout from '@/app/client-layout';
import { Footer } from '@/components/organisms';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body>
        <ClientLayout>{children}</ClientLayout>
        <footer role="contentinfo">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
