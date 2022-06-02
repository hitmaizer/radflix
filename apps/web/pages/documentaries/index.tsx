import React from 'react';

import DocBanner from '@components/DocBanner';
import DocRow from '@components/DocRow';
import { GetServerSideProps } from 'next';
import { getSession, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import axios from 'src/axios/instance';
import requests from 'src/axios/requests';
import { RootState } from 'src/redux/store';

import { Browse, MenuList } from '@components';
import {
  Button,
  Loading,
  Logged,
  Logo,
  Navbar,
  Skeleton,
  Stack,
  Text,
} from '@ui';

const index = ({ movie }: any) => {
  const { data: session } = useSession();
  const loading = useSelector((state: RootState) => state.loading.loading);

  if (typeof window === 'undefined') return null;
  if (session) {
    return (
      <>
        <Browse>
          <Navbar browse>
            <Logo imgSrc="radflix-logo.png" width="100px" />
            <MenuList />
            <Logged
              imgSrc="/placeholder-avatar.jpg"
              display="flex"
              alignItems="center"
            >
              <Link href="/" passHref>
                <Button text onClick={() => signOut()}>
                  <Text>Logout from Radflix</Text>
                </Button>
              </Link>
            </Logged>
          </Navbar>
          <DocBanner
            imgSrc={movie.backdrop.data[0].url}
            title={movie.title}
            slug={movie.slug}
            description={movie.description}
          />
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
          <Stack display="flex" vertical gridGap="40px">
            <DocRow
              title="Skateboarding Documentaries"
              fetchURL={requests.skateDocs}
              square
            />
            <DocRow
              title="Surf Documentaries"
              fetchURL={requests.surfDocs}
              square
            />
            <DocRow
              title="BMX Documentaries"
              fetchURL={requests.bmxDocs}
              square
            />
            <DocRow
              title="Snowboard Documentaries"
              fetchURL={requests.snowDocs}
              square
            />
          </Stack>
        </Browse>
      </>
    );
  }
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const response = await axios.get(requests.allDocs);
  const data = await response.data.data[
    Math.floor(Math.random() * response.data.data.length)
  ];

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
      movie: data,
    },
  };
};
