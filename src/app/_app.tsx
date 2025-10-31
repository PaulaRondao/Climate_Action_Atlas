import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}
