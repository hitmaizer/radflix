import React, { useState, useEffect } from 'react';

import { MovieObj } from '@components/Banner/Banner.types';
import ImageCard from '@components/ImageCard';
import { StyledSwiper } from '@components/SkaterRow/SkaterRow.styles';
import UnderBanner from '@components/UnderBanner';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';
import 'swiper/css';

import * as S from './DocRow.styles';
import { DocRowProps } from './DocRow.types';

const DocRow = ({
  children,
  title,
  store,
  square,
  poster,
  ...rest
}: DocRowProps) => {
  const [docs, setDocs] = useState<MovieObj[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<MovieObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const handleClick = (d: MovieObj) => {
    setSelectedDoc(d);
    setShowUnder(true);
  };

  useEffect(() => {
    setDocs(store!);
  }, [store]);

  return (
    <>
      {!loading && (
        <S.DocRow display="flex" flexDirection="column" ml={16} {...rest}>
          <Heading size="2xl" fontWeight="700" color="white" mr="auto">
            {title}
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
            {docs.map((doc: MovieObj) => (
              <SwiperSlide key={doc.id} onClick={() => handleClick(doc)}>
                <ImageCard
                  poster={poster}
                  square={square}
                  title={doc.title}
                  imgSrc={square ? doc.backdrop.data.url : doc.poster.data.url}
                  blurhash={
                    square
                      ? doc.backdrop.data.blurhash
                      : doc.poster.data.blurhash
                  }
                />
              </SwiperSlide>
            ))}
          </StyledSwiper>
          {children}
        </S.DocRow>
      )}
      {showUnder && (
        <UnderBanner
          selectedMovie={selectedDoc!}
          slug={selectedDoc?.slug}
          path="docs"
        />
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default DocRow;
