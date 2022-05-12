import { GetServerSideProps } from 'next';
import { useSession, getSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Browse from 'src/components/Browse/Browse';
import Content from 'src/components/Content/Content';
import { RootState } from 'src/redux/store';

import {
  Button,
  Heading,
  Loading,
  Logged,
  Logo,
  Navbar,
  Skeleton,
  Stack,
} from '@components';

const index = () => {
  const { data: session } = useSession();
  const loading = useSelector((state: RootState) => state.loading.loading);

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
          {loading && (
            <>
              <Loading display="flex" flexDirection="column">
                <Stack
                  display="flex"
                  vertical
                  alignItems="center"
                  justifyContent="flex-start"
                  mt="300px"
                >
                  <Skeleton heading />
                  <Stack display="flex" gridGap="8px">
                    <Skeleton card />
                    <Skeleton card />
                    <Skeleton card />
                    <Skeleton card />
                    <Skeleton card />
                    <Skeleton card />
                  </Stack>
                </Stack>
              </Loading>
            </>
          )}
          <Content />
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
