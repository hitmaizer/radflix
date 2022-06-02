import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import BackBtn from '@components/BackBtn';
import { MovieObj } from '@components/Banner/Banner.types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import requests from 'src/axios/requests';

import { Browse } from '@components';
import { Loading, Player, Skeleton, Stack } from '@ui';

import axios from '../../src/axios/instance';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Movie {
  movie: {
    title: string;
    movieLink: string;
    moviePoster: string;
    slug: string;
    releaseYear: number;
    backdropPoster: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    id: number;
  };
}

const Watch = ({ movie }: Movie) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <>
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
      </>
    );
  }

  return (
    <Stack>
      <Player vidSrc={movie.movieLink} />
      <BackBtn />
    </Stack>
  );
};

export default Watch;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(`${requests.allMovies}/${slug}`);
  const data = await response.data;

  return {
    props: {
      movie: data.data,
    },
    revalidate: 18000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-movies'
  );
  const data = await response.json();

  const paths = data.data.map((movie: MovieObj) => {
    return { params: { slug: movie.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};
