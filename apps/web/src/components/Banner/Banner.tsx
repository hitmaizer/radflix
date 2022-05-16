import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';

import { Button, Heading, Stack, Text } from '@ui';

import axios from '../../axios/instance';
import requests from '../../axios/requests';
import * as S from './Banner.styles';
import { BannerProps, MovieObj } from './Banner.types';

const Banner = ({ children, ...rest }: BannerProps) => {
  const [movie, setMovie] = useState<MovieObj>();
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const req = await axios
        .get(requests.allMovies)
        .then((res) =>
          setMovie(
            res.data.data[Math.floor(Math.random() * res.data.data.length)]
          )
        )
        .catch((err) => {
          dispatch(setError(err));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });

      return req;
    }
    fetchData();
  }, []);

  return (
    <>
      {!loading && (
        <S.Banner
          {...rest}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(180deg, rgba(23,23,23,1) 9%, rgba(23,23,23,0.4822303921568627) 51%, rgba(23,23,23,1) 100%), url("${movie?.attributes.backdropPoster}")`,
            backgroundPosition: 'center',
          }}
        >
          <S.BannerContent>
            <Heading color="white" fontWeight="bold">
              {movie?.attributes.title}
            </Heading>
            {children}
            <Stack display="flex" gridGap={4}>
              <Link href={`/watch/${movie?.attributes.slug}`} passHref>
                <Link href={`/watch/${movie?.attributes.slug.toString()}`}>
                  <Button banner> Play</Button>
                </Link>
              </Link>
              <Button banner>My List</Button>
            </Stack>
            <Text color="white" lineHeight={1.5} maxWidth="100px">
              {`${movie?.attributes.description.substring(0, 150)}...`}
            </Text>
          </S.BannerContent>
        </S.Banner>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default Banner;
