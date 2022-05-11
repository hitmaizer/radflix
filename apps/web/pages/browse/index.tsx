import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import Link from 'next/link';
import Browse from 'src/components/Browse/Browse';

import { Heading, Logged, Logo, Navbar, Stack, Text } from '@components';

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
              gridGap="16px"
              flex={1}
              ml={8}
            >
              <Link href="/categories" passHref>
                <Text color="white">Categorias</Text>
              </Link>
              <Link href="/documentaries" passHref>
                <Text color="white">Documentários</Text>
              </Link>
              <Link href="/highlights" passHref>
                <Text color="white">Highlights</Text>
              </Link>
            </Stack>
            <Logged
              imgSrc="/placeholder-avatar.jpg"
              display="flex"
              alignItems="center"
            />
          </Navbar>
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
