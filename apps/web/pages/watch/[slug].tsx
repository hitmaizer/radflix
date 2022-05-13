import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import { GetStaticProps } from 'next';

import { Player, Stack } from '@components';

import axios from '../../src/axios/instance';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Watch = () => {
  return (
    <Stack>
      <Player />
    </Stack>
  );
};

export default Watch;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(`/all-movies?filters[slug]=${slug}`);
  const data = await response.data;

  return {
    props: {
      slug: data.attributes.slug,
    },
  };
};
