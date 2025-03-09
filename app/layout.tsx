import { Metadata } from 'next';
import '../frontend/ui/globals.css';

export const metadata: Metadata = {
  title: 'Climate Action Atlas',
  description:
    'Climate Action Atlas, cartographier les effets du changement climatique, connecter les initiatives et agir pour un avenir durable',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
