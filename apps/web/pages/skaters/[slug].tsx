import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import { SkaterObj } from '@components/SkaterRow/SkaterRow.types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Browse } from '@components';
import { Loading, Player, Skeleton, Stack } from '@ui';

import axios from '../../src/axios/instance';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Skater {
  skater: {
    id: number;
    name: string;
    link: string;
    slug: string;
    bio: string;
    poster: {
      data: {
        url: string;
        blurhash: string;
      };
    };
    backdrop: {
      data: {
        url: string;
        blurhash: string;
      };
    };
  };
}

const Watch = ({ skater }: Skater) => {
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
      <Player vidSrc={skater.link} />
    </Stack>
  );
};

export default Watch;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(
    `https://radflix-cms.herokuapp.com/api/skaters/${slug}`
  );
  const data = await response.data;

  return {
    props: {
      skater: data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://radflix-cms.herokuapp.com/api/skaters');
  const data = await response.json();

  const paths = data.data.map((skater: SkaterObj) => {
    return { params: { slug: skater.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};
