import { FC, useState, useEffect } from 'react';

import SEO from '@config/next-seo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/styles';
import '@config/fontsource';
import theme from 'ui/styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://radflix.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
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
        <GlobalStyle />
        {mounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
