import React from 'react';

import { GetStaticProps } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { Browse, Homepage, Logged, MenuList } from '@components';
import {
  Box,
  Button,
  Heading,
  Loading,
  Logo,
  Navbar,
  Skeleton,
  Stack,
  Text,
} from '@ui';

const index = ({ allMovies }) => {
  const { data: session } = useSession();
  const loading = useSelector((state: RootState) => state.loading.loading);

  if (typeof window === 'undefined') return null;
  if (session) {
    return (
      <>
        <Browse>
          <Navbar browse>
            <Link href="/" passHref>
              <a href="dummy">
                <Logo imgSrc="radflix-logo.png" width="100px" />
              </a>
            </Link>
            <MenuList />
            <Logged
              imgSrc="/placeholder-avatar.jpg"
              display="flex"
              alignItems="center"
              filteredData={allMovies}
            >
              <Link href="/" passHref>
                <a href="dummy">
                  <Button text onClick={() => signOut()}>
                    <Text>Logout from Radflix</Text>
                  </Button>
                </a>
              </Link>
            </Logged>
          </Navbar>
          <h1>hellomate</h1>
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
              </Loading>
            </>
          )}
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

export const getStaticProps: GetStaticProps = async () => {
  const request1 = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-brands?populate=*'
  );
  const allMovies = await request1.json();

  return {
    props: {
      allMovies: allMovies.data,
    },
    revalidate: 43200,
  };
};
