import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { MovieObj } from 'src/components/Banner/Banner.types';

import { Player, Stack } from '@components';

import axios from '../../src/axios/instance';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Movie {
  movie: {
    attributes: {
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
    };
    id: number;
  };
}

const Watch = ({ movie }: Movie) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading..</p>;
  }

  return (
    <Stack>
      <Player vidSrc={movie.attributes.movieLink} />
    </Stack>
  );
};

export default Watch;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(
    `http://localhost:1337/api/all-movies/${slug}`
  );
  const data = await response.data;

  return {
    props: {
      movie: data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:1337/api/all-movies`);
  const data = await response.json();

  const paths = data.data.map((movie: MovieObj) => {
    return { params: { slug: movie.attributes.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};
