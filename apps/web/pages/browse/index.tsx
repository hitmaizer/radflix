import { GetServerSideProps } from 'next';
import { useSession, getSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Banner from 'src/components/Banner/Banner';
import Browse from 'src/components/Browse/Browse';

import { Button, Heading, Logged, Logo, Navbar, Stack } from '@components';

const index = () => {
  const { data: session } = useSession();

  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <>
        <Browse>
          <Navbar browse>
            <Logo imgSrc="radflix-logo.svg" />
            <Stack
              display="flex"
              alignItems="center"
              gridGap="8px"
              flex={1}
              ml={8}
            >
              <Link href="/categories" passHref>
                <Button text>Categorias</Button>
              </Link>
              <Link href="/documentaries" passHref>
                <Button text>Documentários</Button>
              </Link>
              <Link href="/highlights" passHref>
                <Button text>Highlights</Button>
              </Link>
            </Stack>
            <Logged
              imgSrc="/placeholder-avatar.jpg"
              display="flex"
              alignItems="center"
            >
              <Link href="/" passHref>
                <Button text onClick={() => signOut()}>
                  Sair do Radflix
                </Button>
              </Link>
            </Logged>
          </Navbar>
          <Banner />
        </Browse>
      </>
    );
  }
  return <Heading>Please Login to access this page.</Heading>;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
