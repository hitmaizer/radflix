import { GetServerSideProps } from 'next';
import { useSession, getSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Browse from 'src/components/Browse/Browse';
import Content from 'src/components/Content/Content';
import Homepage from 'src/components/Homepage/Homepage';
import { RootState } from 'src/redux/store';

import {
  Box,
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
                <Button text>Categories</Button>
              </Link>
              <Link href="/documentaries" passHref>
                <Button text>Documentaries</Button>
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
                  Logout from Radflix
                </Button>
              </Link>
            </Logged>
          </Navbar>
          {loading && (
            <>
              <Loading
                display="flex"
                flexDirection="column"
                alignItems="center"
                ml={10}
              >
                <Skeleton heading />
                <Stack display="flex" gridGap="16px">
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                </Stack>
                <Skeleton heading />
                <Stack display="flex" gridGap="16px">
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                  <Skeleton card />
                </Stack>
              </Loading>
            </>
          )}
          <Content />
        </Browse>
      </>
    );
  }
  return (
    <Homepage>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        pt={15}
      >
        <Heading size="4xl" color="white" fontWeight="bold" textAlign="center">
          Please Login to access this page.
        </Heading>
      </Box>
    </Homepage>
  );
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
