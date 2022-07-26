import { FC, useEffect, useState } from 'react';

import Head from '@components/Head';
import SEO from '@config/next-seo';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/styles';
import theme from 'ui/styles/theme';

import * as ga from '../lib/ga';

const MyApp: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const router = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://radflix.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);

    const handlgeRouteChange = (url) => {
      ga.pageView(url);
    };

    router.events.on('routeChangeComplete', handlgeRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handlgeRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="my-script">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <SessionProvider session={session}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <DefaultSeo
              canonical={canonicalUrl}
              openGraph={{
                url: canonicalUrl,
                type: 'website',
                site_name: 'Radflix',
              }}
              dangerouslySetAllPagesToNoIndex
              {...SEO}
            />
            <Head>
              <GlobalStyle />
              {mounted && <Component {...pageProps} />}
            </Head>
          </ThemeProvider>
        </Provider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
