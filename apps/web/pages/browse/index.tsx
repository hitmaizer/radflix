import { useEffect } from 'react';

import Header from '@components/Header';
import { Browse, Content } from '@components/index';
import Results from '@components/Results';
import { GetStaticProps } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from 'src/redux/allMovies';
import { setBmx } from 'src/redux/bmx';
import { setDirtBikes } from 'src/redux/dirtBikes';
import { setLoading } from 'src/redux/loading';
import { setOldSkool } from 'src/redux/oldSkool';
import { setSkateboarding } from 'src/redux/skateboarding';
import { setSkaters } from 'src/redux/skaters';
import { setSnowboarding } from 'src/redux/snowboarding';
import { RootState } from 'src/redux/store';
import { setSurfing } from 'src/redux/surfing';

import { Loading, Skeleton, Stack } from '@ui';

const index = ({
  allMovies,
  skaters,
  skateboarding,
  snowboarding,
  surfing,
  bmx,
  dirtBikes,
  oldSkool,
}: any) => {
  const loading = useSelector((state: RootState) => state.loading.loading);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setMovies(allMovies));
    dispatch(setSkaters(skaters));
    dispatch(setSkateboarding(skateboarding));
    dispatch(setSnowboarding(snowboarding));
    dispatch(setSurfing(surfing));
    dispatch(setBmx(bmx));
    dispatch(setDirtBikes(dirtBikes));
    dispatch(setOldSkool(oldSkool));
    dispatch(setLoading(false));
  }, [allMovies]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <Browse>
        <Header filteredData={movies} />
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
        {filteredData.length !== 0 && <Results square path="/watch" />}
        {filteredData.length === 0 && <Content />}
      </Browse>
    </>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const request1 = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-movies?populate=*&pagination[pageSize]=100'
  );
  const allMovies = await request1.json();
  const request2 = await fetch(
    'https://radflix-cms.herokuapp.com/api/skaters?populate=*'
  );
  const skaters = await request2.json();
  const request3 = await fetch(
    'https://radflix-cms.herokuapp.com/api/skate-movies?populate=*&pagination[pageSize]=30'
  );
  const skateboarding = await request3.json();
  const request4 = await fetch(
    'https://radflix-cms.herokuapp.com/api/snowboard-movies?populate=*'
  );
  const snowboarding = await request4.json();
  const request5 = await fetch(
    'https://radflix-cms.herokuapp.com/api/surf-movies?populate=*'
  );
  const surfing = await request5.json();
  const request6 = await fetch(
    'https://radflix-cms.herokuapp.com/api/bmx-movies?populate=*'
  );
  const bmx = await request6.json();
  const request7 = await fetch(
    'https://radflix-cms.herokuapp.com/api/dirt-bike-movies?populate=*'
  );
  const dirtBikes = await request7.json();
  const request8 = await fetch(
    'https://radflix-cms.herokuapp.com/api/old-skool-skates?populate=*'
  );
  const oldSkool = await request8.json();

  return {
    props: {
      allMovies: allMovies.data,
      skaters: skaters.data,
      skateboarding: skateboarding.data,
      snowboarding: snowboarding.data,
      surfing: surfing.data,
      bmx: bmx.data,
      dirtBikes: dirtBikes.data,
      oldSkool: oldSkool.data,
    },
    revalidate: 43200,
  };
};
