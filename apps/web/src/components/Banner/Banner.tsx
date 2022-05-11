import { useEffect, useState } from 'react';

import Button from '@components/Button';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Link from 'next/link';

import { Skeleton } from '@components';

import axios from '../../axios/instance';
import requests from '../../axios/requests';
import * as S from './Banner.styles';
import { BannerProps, MovieObj } from './Banner.types';

const Banner = ({ children, ...rest }: BannerProps) => {
  const [movie, setMovie] = useState<MovieObj>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const req = await axios
        .get(requests.skateMovies)
        .then((res) =>
          setMovie(
            res.data.data[Math.floor(Math.random() * res.data.data.length - 1)]
          )
        )
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
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
            backgroundImage: `linear-gradient(180deg, rgba(20,20,20,1) 9%, rgba(20,20,20,0) 51%, rgba(20,20,20,1) 100%), url("${movie?.attributes.backdropPoster}")`,
            backgroundPosition: 'top center',
          }}
        >
          <S.BannerContent>
            <Heading color="white" fontWeight="bold">
              {movie?.attributes.title}
            </Heading>
            {children}
            <Stack display="flex" gridGap={4}>
              <Link href={`/watch/${movie?.attributes.slug}`} passHref>
                <Button banner> Play</Button>
              </Link>
              <Button banner>My List</Button>
            </Stack>
            <Text color="white" lineHeight={1.5} maxWidth="100px">
              {`${movie?.attributes.description.substring(0, 150)}...`}
            </Text>
          </S.BannerContent>
        </S.Banner>
      )}
      {loading && (
        <>
          <Skeleton banner />
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Banner;
