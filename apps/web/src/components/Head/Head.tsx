import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/radflix-cms/image/upload/v1652869673/radflix_logo_29b2ec50ff.png?updated_at=2022-05-18T11:27:56.260Z"
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
