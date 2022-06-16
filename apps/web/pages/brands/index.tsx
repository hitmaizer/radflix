import React from 'react';

import BrandRow from '@components/BrandRow';
import { GetStaticProps } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import requests from 'src/axios/requests';
import { RootState } from 'src/redux/store';

import {
  Banner,
  Browse,
  Homepage,
  Logged,
  MenuList,
  Results,
  Row,
} from '@components';
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
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );

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
          {filteredData.length !== 0 && <Results data={filteredData} square />}
          {filteredData.length === 0 && (
            <>
              <Banner movies={allMovies} path="brand" />

              <BrandRow
                title="The Berrics"
                fetchURL={requests.berrics}
                square
              />
              <Row
                title="Braille Skateboarding"
                fetchURL={requests.brailles}
                square
              />
              <Row
                title="Red Bull"
                fetchURL={requests.redbulls}
                square
                path="brand"
              />
              <Row
                title="TransWorld SKATEboarding"
                fetchURL={requests.transworld}
                square
                path="brand"
              />
              <Row
                title="Thrasher Magazine"
                fetchURL={requests.trasher}
                square
                path="brand"
              />
              <Row title="Vans" fetchURL={requests.vans} square path="brand" />
            </>
          )}

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
