import { FC, useState, useEffect } from 'react';

import Head from '@components/Head';
import SEO from '@config/next-seo';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/styles';
import theme from 'ui/styles/theme';

const MyApp: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://radflix.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
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
