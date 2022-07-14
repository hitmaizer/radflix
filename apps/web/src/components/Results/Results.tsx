import React, { useState } from 'react';

import { MovieObj } from '@components/Banner/Banner.types';
import ImageCard from '@components/ImageCard';
import { StyledSwiper } from '@components/SkaterRow/SkaterRow.styles';
import UnderBanner from '@components/UnderBanner';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Heading } from '@ui';

import * as S from './Results.styles';
import { ResultsProps } from './Results.types';

const BLUR_FALLBACK =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAgEDBQAAAAAAAAAAAAABAgADBAYHIRESF1GB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/AJbRrnbqjBpTxyt+WtSrZbZnMFdwgBPaBwCwJ+yVs6liQgA68D1EQqypf//Z';

const Results = ({ children, square, path, ...rest }: ResultsProps) => {
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const [selectedDoc, setSelectedDoc] = useState<MovieObj>();
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );

  const handleClick = (d: MovieObj) => {
    setSelectedDoc(d);
    setShowUnder(true);
  };

  return (
    <>
      <S.Results {...rest}>
        <Heading size="2xl" fontWeight="700" color="white" mr="auto">
          We found {filteredData?.length} results
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
          {filteredData?.map((value: MovieObj) => {
            return (
              <SwiperSlide key={value.id} onClick={() => handleClick(value)}>
                <ImageCard
                  imgSrc={value.backdrop.data.url}
                  blurhash={value.backdrop.data.placeholder || BLUR_FALLBACK}
                  square
                />
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
        {children}
      </S.Results>
      {showUnder && (
        <UnderBanner
          selectedMovie={selectedDoc}
          path={path}
          slug={selectedDoc?.slug}
        />
      )}
    </>
  );
};

export default Results;
