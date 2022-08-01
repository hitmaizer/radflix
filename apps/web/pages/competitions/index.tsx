import React from 'react';

import { GetStaticProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { Banner, Browse, Header, Results, Row } from '@components';
import { Loading, Skeleton, Stack } from '@ui';

const index = ({
  allCompetition,
  xGames,
  streetLeague,
  olympics,
  tampa,
  dewTour,
}) => {
  const loading = useSelector((state: RootState) => state.loading.loading);
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );

  if (typeof window === 'undefined') return null;

  return (
    <>
      <Browse>
        <Header filteredData={allCompetition} />
        {filteredData.length !== 0 && (
          <Results data={filteredData} square path="/competition" />
        )}
        {filteredData.length === 0 && (
          <>
            <Banner movies={allCompetition} path="competition" />
            <Row title="X Games" store={xGames} square path="competition" />
            <Row title="SLS" store={streetLeague} square path="competition" />
            <Row title="Olympics" store={olympics} square path="competition" />
            <Row title="Tampa" store={tampa} square path="competition" />
            <Row title="Dew Tour" store={dewTour} square path="competition" />
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
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const request1 = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-competitions?populate=*'
  );
  const allCompetition = await request1.json();
  const request2 = await fetch(
    'https://radflix-cms.herokuapp.com/api/x-games?populate=*'
  );
  const xGames = await request2.json();
  const request3 = await fetch(
    'https://radflix-cms.herokuapp.com/api/street-leagues?populate=*'
  );
  const streetLeague = await request3.json();
  const request4 = await fetch(
    'https://radflix-cms.herokuapp.com/api/olympics?populate=*'
  );
  const olympics = await request4.json();
  const request5 = await fetch(
    'https://radflix-cms.herokuapp.com/api/tampas?populate=*'
  );
  const tampa = await request5.json();
  const request6 = await fetch(
    'https://radflix-cms.herokuapp.com/api/dew-tours?populate=*'
  );
  const dewTour = await request6.json();

  return {
    props: {
      allCompetition: allCompetition.data,
      xGames: xGames.data,
      streetLeague: streetLeague.data,
      olympics: olympics.data,
      tampa: tampa.data,
      dewTour: dewTour.data,
    },
  };
};
