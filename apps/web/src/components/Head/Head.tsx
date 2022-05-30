import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://i.ibb.co/BtJj682/seo-thumbnail.png"
        />
        <meta
          property="og:description"
          content="Radflix is a simple Netflix clone, but it's themed around extreme sports, to create an extreme sports movies hub.
          There are Skateboarding, Snowboarding, Surf, BMX, and Surfing movies."
          key="ogdesc"
        />
      </Head>
      <section>
        <main>{children}</main>
      </section>
    </>
  );
}
