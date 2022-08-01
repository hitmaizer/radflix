import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import { DocObj } from '@components/DocBanner/DocBanner';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { BackBtn, Browse } from '@components';
import { Loading, Player, Skeleton, Stack } from '@ui';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Competition {
  competition: {
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
  };
}

const Detail = ({ competition }: Competition) => {
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
          </Loading>
        </Browse>
      </>
    );
  }

  return (
    <Stack>
      <Player vidSrc={competition.movieLink} />
      <BackBtn />
    </Stack>
  );
};

export default Detail;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(
    `https://radflix-cms.herokuapp.com/api/all-competitions/${slug}`
  );
  const data = await response.data;
  return {
    props: {
      competition: data.data,
    },
    revalidate: 18000,
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-competitions'
  );
  const data = await response.json();

  const paths = data.data.map((competition: DocObj) => {
    return { params: { slug: competition.slug } };
  });
  return {
    paths,
    fallback: true,
  };
};
