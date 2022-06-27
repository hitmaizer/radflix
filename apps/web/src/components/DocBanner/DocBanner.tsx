import React, { useEffect, useState } from 'react';

import { BannerContent } from '@components/Banner/Banner.styles';
import { MovieObj } from '@components/Banner/Banner.types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { Button, Heading, Stack, Text } from '@ui';

import * as S from './DocBanner.styles';
import { DocBannerProps } from './DocBanner.types';

export interface DocObj {
  backdrop: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  id: number;
  movieLink: string;
  poster: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  slug: string;
  title: string;
  description: string;
}

const DocBanner = ({ children, path, docs, ...rest }: DocBannerProps) => {
  const [movie, setMovie] = useState<MovieObj>();
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  useEffect(() => {
    setMovie(docs[Math.floor(Math.random() * docs.length)]);
  }, [docs]);

  return (
    <>
      {!loading && (
        <S.DocBanner
          {...rest}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(180deg, rgba(23,23,23,1) 9%, rgba(23,23,23,0.4822303921568627) 51%, rgba(23,23,23,1) 100%), url("${movie?.backdrop.data[0].url}")`,
            backgroundPosition: 'top',
          }}
        >
          <S.Overlay />
          <BannerContent>
            <Heading color="white" fontWeight="bold">
              {movie?.title}
            </Heading>
            <Stack display="flex" gridGap={4}>
              <Link href={`/${path}/${movie?.slug}`}>
                <Button banner>Play</Button>
              </Link>
              <Button banner>My List</Button>
            </Stack>
            <Text
              color="white"
              lineHeight={1.5}
            >{`${movie?.description?.substring(0, 150)}...`}</Text>
          </BannerContent>
          {children}
        </S.DocBanner>
      )}
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default DocBanner;
