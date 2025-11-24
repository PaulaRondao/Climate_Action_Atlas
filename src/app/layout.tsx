import ClientLayout from '@/app/client-layout';
import { Footer } from '@/components/organisms';
import logger from '@/lib/pino/logger.server';

export const metadata = {
  title: 'Climate Action Atlas',
  description:
    'Climate Action Atlas, cartographier les effets du changement climatique, connecter les initiatives et agir pour un avenir durable',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  logger.info("Lancement de l'app");
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body>
        <ClientLayout>
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
