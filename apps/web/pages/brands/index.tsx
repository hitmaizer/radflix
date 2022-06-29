import React from 'react';

import BrandRow from '@components/BrandRow';
import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { Banner, Browse, Header, Results, Row } from '@components';
import { Loading, Skeleton, Stack } from '@ui';

const index = ({
  allMovies,
  berrics,
  brailles,
  redbulls,
  transworlds,
  trashers,
  vans,
  nineclubs,
  shredzshops,
}) => {
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
          <Header filteredData={allMovies} />
          {filteredData.length !== 0 && (
            <Results data={filteredData} square path="/brand" />
          )}
          {filteredData.length === 0 && (
            <>
              <Banner movies={allMovies} path="brand" />

              <Row
                title="Thrasher Magazine"
                store={trashers}
                square
                path="brand"
              />
              <BrandRow
                title="The Berrics"
                store={berrics}
                square
                path="brand"
              />
              <Row
                title="Braille Skateboarding"
                store={brailles}
                square
                path="brand"
              />
              <Row
                title="The Nine Club"
                store={nineclubs}
                square
                path="brand"
              />
              <Row
                title="Shredz Shop"
                store={shredzshops}
                square
                path="brand"
              />
              <Row title="Red Bull" store={redbulls} square path="brand" />
              <Row
                title="TransWorld SKATEboarding"
                store={transworlds}
                square
                path="brand"
              />
              <Row title="Vans" store={vans} square path="brand" />
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
    <Browse>
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
    </Browse>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const request1 = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-brands?populate=*'
  );
  const allMovies = await request1.json();
  const request2 = await fetch(
    'https://radflix-cms.herokuapp.com/api/berrics?populate=*'
  );
  const berrics = await request2.json();
  const request3 = await fetch(
    'https://radflix-cms.herokuapp.com/api/brailles?populate=*'
  );
  const brailles = await request3.json();
  const request4 = await fetch(
    'https://radflix-cms.herokuapp.com/api/redbulls?populate=*'
  );
  const redbulls = await request4.json();
  const request5 = await fetch(
    'https://radflix-cms.herokuapp.com/api/transworlds?populate=*'
  );
  const transworlds = await request5.json();
  const request6 = await fetch(
    'https://radflix-cms.herokuapp.com/api/trashers?populate=*'
  );
  const trashers = await request6.json();
  const request7 = await fetch(
    'https://radflix-cms.herokuapp.com/api/vans?populate=*'
  );
  const vans = await request7.json();
  const request8 = await fetch(
    'https://radflix-cms.herokuapp.com/api/nineclubs?populate=*'
  );
  const nineclubs = await request8.json();
  const request9 = await fetch(
    'https://radflix-cms.herokuapp.com/api/shredzshops?populate=*'
  );
  const shredzshops = await request9.json();

  return {
    props: {
      allMovies: allMovies.data,
      berrics: berrics.data,
      brailles: brailles.data,
      redbulls: redbulls.data,
      transworlds: transworlds.data,
      trashers: trashers.data,
      vans: vans.data,
      nineclubs: nineclubs.data,
      shredzshops: shredzshops.data,
    },
    revalidate: 43200,
  };
};
