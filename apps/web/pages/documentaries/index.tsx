import React, { useEffect } from 'react';

import DocBanner from '@components/DocBanner';
import DocRow from '@components/DocRow';
import ResultsDocs from '@components/ResultsDocs';
import { GetServerSideProps } from 'next';
import { getSession, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'src/axios/instance';
import requests from 'src/axios/requests';
import { setDocs } from 'src/redux/docs';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';

import { Browse, Logged, MenuList } from '@components';
import { Button, Loading, Logo, Navbar, Skeleton, Stack, Text } from '@ui';

interface Doc {
  doc: {
    backdrop: {
      data: {
        url: string;
        blurhash: string;
      };
    };
    id: number;
    movieLink: string;
    poster: {
      data: {
        url: string;
        blurhash: string;
      };
    };
    slug: string;
    title: string;
    description: string;
  };
}

const index = ({ doc }: Doc) => {
  const { data: session } = useSession();
  const loading = useSelector((state: RootState) => state.loading.loading);
  const docs = useSelector((state: RootState) => state.docsData.docs);
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      axios
        .get(requests.allDocs)
        .then((res) => dispatch(setDocs(res.data?.data)))
        .catch((err) => dispatch(setError(err)))
        .finally(() => dispatch(setLoading(false)));
    }
    fetchData();
  }, []);

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
              </Loading>
            </>
          )}
          <Navbar browse>
            <Link href="/browse" passHref>
              <a href="dummy">
                <Logo imgSrc="radflix-logo.png" width="100px" />
              </a>
            </Link>
            <MenuList />
            <Logged
              imgSrc="/placeholder-avatar.jpg"
              display="flex"
              alignItems="center"
              filteredData={docs}
            >
              <Link href="/" passHref>
                <Button text onClick={() => signOut()}>
                  <Text>Logout from Radflix</Text>
                </Button>
              </Link>
            </Logged>
          </Navbar>
          {filteredData.length !== 0 && (
            <ResultsDocs data={filteredData} square />
          )}
          {filteredData.length === 0 && (
            <>
              <DocBanner
                imgSrc={doc.backdrop.data[0].url}
                title={doc.title}
                slug={doc.slug}
                description={doc.description}
                path="docs"
              />
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
            </>
          )}
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
      doc: data,
    },
  };
};
