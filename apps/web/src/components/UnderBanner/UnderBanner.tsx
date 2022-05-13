import React from 'react';

import Button from '@components/Button';
import Heading from '@components/Heading';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Link from 'next/link';

import * as S from './UnderBanner.styles';
import { UnderBannerProps } from './UnderBanner.types';

const UnderBanner = ({ children, selectedMovie }: UnderBannerProps) => {
  return (
    <S.UnderBanner
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(180deg, rgba(23,23,23,1) 9%, rgba(23,23,23,0.4822303921568627) 51%, rgba(23,23,23,1) 100%), url("${selectedMovie?.attributes.backdropPoster}")`,
        backgroundPosition: 'top',
      }}
    >
      <S.UnderContent>
        <Heading color="white" fontWeight="bold" textAlign="left">
          {selectedMovie?.attributes.title}
        </Heading>
        <Stack display="flex" gridGap={4}>
          <Link href={`/watch/${selectedMovie?.attributes.slug}`} passHref>
            <Button banner> Play</Button>
          </Link>
          <Button banner>My List</Button>
        </Stack>
        <Text color="white" lineHeight={1.5}>
          {`${selectedMovie?.attributes.description.substring(0, 150)}...`}
        </Text>
        {children}
      </S.UnderContent>
    </S.UnderBanner>
  );
};

export default UnderBanner;
