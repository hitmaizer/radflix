import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { Button, Heading, Stack, Text } from '@ui';

import * as S from './Banner.styles';
import { BannerProps, MovieObj } from './Banner.types';

const Banner = ({ children, movies, ...rest }: BannerProps) => {
  const [movie, setMovie] = useState<MovieObj>();
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, []);

  return (
    <>
      {!loading && (
        <S.Banner
          {...rest}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(180deg, rgba(23,23,23,1) 9%, rgba(23,23,23,0.4822303921568627) 51%, rgba(23,23,23,1) 100%), url("${movie?.backdrop.data.url}")`,
            backgroundPosition: 'top',
          }}
        >
          <S.BannerContent>
            <Heading color="white" fontWeight="bold">
              {movie?.title}
            </Heading>
            {children}
            <Stack display="flex" gridGap={4}>
              <Link href={`/watch/${movie?.slug}`} passHref>
                <Link href={`/watch/${movie?.slug.toString()}`}>
                  <Button banner> Play</Button>
                </Link>
              </Link>
              <Button banner>My List</Button>
            </Stack>
            <Text color="white" lineHeight={1.5} maxWidth="100px">
              {`${movie?.description.substring(0, 150)}...`}
            </Text>
          </S.BannerContent>
        </S.Banner>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default Banner;
