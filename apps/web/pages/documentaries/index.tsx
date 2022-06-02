import React from 'react';

import DocBanner from '@components/DocBanner';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import axios from 'src/axios/instance';
import requests from 'src/axios/requests';
import { RootState } from 'src/redux/store';

import { Browse } from '@components';
import { Heading, Loading, Skeleton, Stack } from '@ui';

const index = ({ movie }: any) => {
  console.log(movie);
  const { data: session } = useSession();
  const loading = useSelector((state: RootState) => state.loading.loading);

  if (typeof window === 'undefined') return null;
  if (session) {
    return (
      <>
        <Browse>
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
          <DocBanner imgSrc={movie.backdrop.data[0].url} />
          <Heading color="#fff">Aqui vai tar a pagina</Heading>
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
