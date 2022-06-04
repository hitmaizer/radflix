import React from 'react';

import ImageCard from '@components/ImageCard';
import { StyledSwiper } from '@components/SkaterRow/SkaterRow.styles';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Heading } from '@ui';

import * as S from './ResultsDocs.styles';
import { ResultsProps } from './ResultsDocs.types';

const Results = ({ children, data, square, ...rest }: ResultsProps) => {
  return (
    <S.Results {...rest}>
      <Heading size="2xl" fontWeight="700" color="white" mr="auto">
        We found {data?.length} results
      </Heading>
      <StyledSwiper
        slidesPerView={square ? 2 : 2}
        spaceBetween={8}
        breakpoints={{
          1400: {
            slidesPerView: square ? 5 : 7,
          },
          1024: {
            slidesPerView: square ? 4 : 6,
          },
          768: {
            slidesPerView: square ? 3 : 5,
          },
          576: {
            slidesPerView: square ? 3 : 4,
          },
        }}
      >
        {data?.map((value) => {
          return (
            <SwiperSlide key={value.id}>
              <ImageCard imgSrc={value.backdrop.data[0].url} square />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
      {children}
    </S.Results>
  );
};

export default Results;
