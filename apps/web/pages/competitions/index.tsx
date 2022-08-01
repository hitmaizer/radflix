import React from 'react';

import { GetStaticProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { Banner, Browse, Header, Results, Row } from '@components';
import { Loading, Skeleton, Stack } from '@ui';

const index = ({ allCompetition, xGames }) => {
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

  return {
    props: {
      allCompetition: allCompetition.data,
      xGames: xGames.data,
    },
  };
};
