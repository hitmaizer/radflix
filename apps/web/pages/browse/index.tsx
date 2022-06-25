import { useEffect } from 'react';

import { Browse, Content, Homepage, Logged } from '@components/index';
import MenuList from '@components/MenuList';
import Results from '@components/Results';
import { GetStaticProps } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from 'src/redux/allMovies';
import { setLoading } from 'src/redux/loading';
import { setSkaters } from 'src/redux/skaters';
import { RootState } from 'src/redux/store';

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

const index = ({ allMovies, skaters }: any) => {
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
              imgSrc="/placeholder-avatar.jpg"
              display="flex"
              alignItems="center"
              filteredData={movies}
            >
              <Link href="/" passHref>
                <a href="dummy">
                  <Button
                    text
                    onClick={() =>
                      signOut({
                        callbackUrl: `${window.location.origin}/`,
                      })
                    }
                  >
                    <Text>Logout from Radflix</Text>
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
          {filteredData.length !== 0 && <Results square />}
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

  return {
    props: {
      allMovies: allMovies.data,
      skaters: skaters.data,
    },
    revalidate: 43200,
  };
};
