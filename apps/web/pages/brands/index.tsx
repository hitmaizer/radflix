import React from 'react';

import BrandRow from '@components/BrandRow';
import { GetStaticProps } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import requests from 'src/axios/requests';
import { RootState } from 'src/redux/store';

import { Banner, Browse, Homepage, Logged, MenuList, Row } from '@components';
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
          <Banner movies={allMovies} />

          <BrandRow title="The Berrics" fetchURL={requests.berrics} square />
          <Row
            title="Braille Skateboarding"
            fetchURL={requests.brailles}
            square
          />
          <Row title="Red Bull" fetchURL={requests.redbulls} square />
          <Row
            title="TransWorld SKATEboarding"
            fetchURL={requests.transworld}
            square
          />
          <Row title="Thrasher Magazine" fetchURL={requests.trasher} square />
          <Row title="Vans" fetchURL={requests.vans} square />

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
