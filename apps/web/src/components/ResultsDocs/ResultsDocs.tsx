import React, { useState } from 'react';

import { DocObj } from '@components/DocBanner/DocBanner';
import ImageCard from '@components/ImageCard';
import { StyledSwiper } from '@components/SkaterRow/SkaterRow.styles';
import UnderDocs from '@components/UnderDocs';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Heading } from '@ui';

import * as S from './ResultsDocs.styles';
import { ResultsProps } from './ResultsDocs.types';

const Results = ({ children, data, square, path, ...rest }: ResultsProps) => {
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const [selectedDoc, setSelectedDoc] = useState<DocObj>();

  const handleClick = (d: DocObj) => {
    setSelectedDoc(d);
    setShowUnder(true);
  };

  return (
    <>
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
              <SwiperSlide key={value.id} onClick={() => handleClick(value)}>
                <ImageCard imgSrc={value.backdrop.data[0].url} square />
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
        {children}
      </S.Results>
      {showUnder && (
        <UnderDocs
          selectedDoc={selectedDoc!}
          path={path}
          slug={selectedDoc!.slug}
        />
      )}
    </>
  );
};

export default Results;
