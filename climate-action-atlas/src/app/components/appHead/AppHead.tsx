import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { PAGE_TITLE } from '../../../../types/enums/page';

interface AppHeadProps {
  title: PAGE_TITLE|string,
  metaTag?: string,
  canonical?: string ,
}

declare global {
  interface Window {
    apieng: any,
    dataLayer: Record<string, any>,
  }
}

const AppHead = ({ title, metaTag, canonical }: AppHeadProps): JSX.Element => {
  const router = useRouter();


  return (
    <>
    <Head>
      <title>{title}</title>
      {metaTag && <meta name="description" content={metaTag} />}
      {metaTag && <meta property="og:description" content={metaTag} />}
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${canonical}`} />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      {process.env.IS_DEV_ENV === 'true' && <meta name="robots" content="noindex" />}
    </Head>
      <Script src="/scripts/api-engagement.js" />
      {process.env.NEXT_PUBLIC_CLOUDFLARE_TRACKING_ID && (
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={`{ "token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_TRACKING_ID}" }`}
      />
      )}
  </>
  );
};

AppHead.defaultProps = {
  metaTag: '',
  canonical: null,
};

export default AppHead;
