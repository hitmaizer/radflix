import React, { useEffect } from 'react';

import ResultsDocs from '@components/ResultsDocs';
import { GetStaticProps } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setBmxDocs } from 'src/redux/bmxDocs';
import { setDocs } from 'src/redux/docs';
import { setLoading } from 'src/redux/loading';
import { setSkateDocs } from 'src/redux/skateDocs';
import { setSnowDocs } from 'src/redux/snowDocs';
import { RootState } from 'src/redux/store';
import { setSurfDocs } from 'src/redux/surfDocs';

import {
  Browse,
  DocBanner,
  Homepage,
  Logged,
  MenuList,
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

const index = ({ allDocs, skateDocs, snowDocs, surfDocs, bmxDocs }: any) => {
  const { data: session } = useSession();
  const loading = useSelector((state: RootState) => state.loading.loading);
  const docs = useSelector((state: RootState) => state.docsData.docs);
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setDocs(allDocs));
    dispatch(setSkateDocs(skateDocs));
    dispatch(setSnowDocs(snowDocs));
    dispatch(setSurfDocs(surfDocs));
    dispatch(setBmxDocs(bmxDocs));
    dispatch(setLoading(false));
  }, [allDocs]);

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
                <Button onClick={() => signOut()}>
                  <Text>Logout</Text>
                </Button>
              </Link>
            </Logged>
          </Navbar>
          {filteredData.length !== 0 && (
            <ResultsDocs data={filteredData} square path="/docs" />
          )}
          {filteredData.length === 0 && (
            <>
              <DocBanner path="docs" docs={allDocs} />
              <Stack display="flex" vertical gridGap="40px">
                <Row
                  title="Skateboarding Documentaries"
                  store={skateDocs}
                  square
                  path="docs"
                />
                <Row
                  title="Surf Documentaries"
                  store={surfDocs}
                  square
                  path="docs"
                />
                <Row
                  title="BMX Documentaries"
                  store={bmxDocs}
                  square
                  path="docs"
                />
                <Row
                  title="Snowboard Documentaries"
                  store={snowDocs}
                  square
                  path="docs"
                />
              </Stack>
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
    'https://radflix-cms.herokuapp.com/api/all-docs?populate=*'
  );
  const allDocs = await request1.json();
  const request2 = await fetch(
    'https://radflix-cms.herokuapp.com/api/skate-docs?populate=*'
  );
  const skateDocs = await request2.json();
  const request3 = await fetch(
    'https://radflix-cms.herokuapp.com/api/surf-docs?populate=*'
  );
  const surfDocs = await request3.json();
  const request4 = await fetch(
    'https://radflix-cms.herokuapp.com/api/bmx-docs?populate=*'
  );
  const bmxDocs = await request4.json();
  const request5 = await fetch(
    'https://radflix-cms.herokuapp.com/api/snowboard-docs?populate=*'
  );
  const snowDocs = await request5.json();

  return {
    props: {
      allDocs: allDocs.data,
      skateDocs: skateDocs.data,
      surfDocs: surfDocs.data,
      bmxDocs: bmxDocs.data,
      snowDocs: snowDocs.data,
    },
    revalidate: 43200,
  };
};
