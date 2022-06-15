import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import { DocObj } from '@components/DocBanner/DocBanner';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { BackBtn, Browse } from '@components';
import { Loading, Player, Skeleton, Stack } from '@ui';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Brand {
  brand: {
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

const Detail = ({ brand }: Brand) => {
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
      <Player vidSrc={brand.movieLink} />
      <BackBtn />
    </Stack>
  );
};

export default Detail;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(
    `https://radflix-cms.herokuapp.com/api/all-brands/${slug}`
  );
  const data = await response.data;

  return {
    props: {
      brand: data.data,
    },
    revalidate: 18000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-brands'
  );
  const data = await response.json();

  const paths = data.data.map((brand: DocObj) => {
    return { params: { slug: brand.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};
