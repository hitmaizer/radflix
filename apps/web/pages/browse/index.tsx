import { useEffect } from 'react';

import { Browse, Content, Homepage, Logged } from '@components/index';
import MenuList from '@components/MenuList';
import Results from '@components/Results';
import { GetStaticProps } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from 'src/redux/allMovies';
import { setBmx } from 'src/redux/bmx';
import { setDirtBikes } from 'src/redux/dirtBikes';
import { setLoading } from 'src/redux/loading';
import { setSkateboarding } from 'src/redux/skateboarding';
import { setSkaters } from 'src/redux/skaters';
import { setSnowboarding } from 'src/redux/snowboarding';
import { RootState } from 'src/redux/store';
import { setSurfing } from 'src/redux/surfing';

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

const index = ({
  allMovies,
  skaters,
  skateboarding,
  snowboarding,
  surfing,
  bmx,
  dirtBikes,
}: any) => {
  const { data: session } = useSession();
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
    dispatch(setLoading(false));
  }, [allMovies]);

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
              imgSrc={session.user?.image!}
              display="flex"
              alignItems="center"
              filteredData={movies}
            >
              <Link href="/" passHref>
                <a href="dummy">
                  <Button
                    onClick={() =>
                      signOut({
                        callbackUrl: `${window.location.origin}/`,
                      })
                    }
                  >
                    <Text>Logout</Text>
                  </Button>
                </a>
              </Link>
            </Logged>
          </Navbar>
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
    'https://radflix-cms.herokuapp.com/api/all-movies?populate=*'
  );
  const allMovies = await request1.json();
  const request2 = await fetch(
    'https://radflix-cms.herokuapp.com/api/skaters?populate=*'
  );
  const skaters = await request2.json();
  const request3 = await fetch(
    'https://radflix-cms.herokuapp.com/api/skate-movies?populate=*'
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

  return {
    props: {
      allMovies: allMovies.data,
      skaters: skaters.data,
      skateboarding: skateboarding.data,
      snowboarding: snowboarding.data,
      surfing: surfing.data,
      bmx: bmx.data,
      dirtBikes: dirtBikes.data,
    },
    revalidate: 43200,
  };
};
