import React from 'react';

import { ParsedUrlQuery } from 'querystring';

import BackBtn from '@components/BackBtn';
import { DocObj } from '@components/DocBanner/DocBanner';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Browse } from '@components';
import { Loading, Player, Skeleton, Stack } from '@ui';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Doc {
  doc: {
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

const Docs = ({ doc }: Doc) => {
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
      <Player vidSrc={doc.movieLink} />
      <BackBtn />
    </Stack>
  );
};

export default Docs;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const response = await axios.get(
    `https://radflix-cms.herokuapp.com/api/all-docs/${slug}`
  );
  const data = await response.data;

  return {
    props: {
      doc: data.data,
    },
    revalidate: 18000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-docs'
  );
  const data = await response.json();

  const paths = data.data.map((doc: DocObj) => {
    return { params: { slug: doc.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};
