import React from 'react';

import { BannerContent } from '@components/Banner/Banner.styles';
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

const DocBanner = ({
  children,
  imgSrc,
  title,
  slug,
  description,
  path,
  ...rest
}: DocBannerProps) => {
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  return (
    <>
      <S.DocBanner {...rest}>
        <S.SImage src={imgSrc!} layout="fill" />
        <S.Overlay />
        <BannerContent>
          <Heading color="white" fontWeight="bold">
            {title}
          </Heading>
          <Stack display="flex" gridGap={4}>
            <Link href={`/${path}/${slug}`}>
              <Button banner>Play</Button>
            </Link>
            <Button banner>My List</Button>
          </Stack>
          <Text color="white" lineHeight={1.5}>{`${description?.substring(
            0,
            150
          )}...`}</Text>
        </BannerContent>
        {children}
      </S.DocBanner>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default DocBanner;
