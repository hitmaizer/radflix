import React, { useState, useEffect } from 'react';

import DocBanner from '@components/DocBanner';
import { DocObj } from '@components/DocBanner/DocBanner';
import ImageCard from '@components/ImageCard';
import { StyledSwiper } from '@components/SkaterRow/SkaterRow.styles';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';
import 'swiper/css';

import * as S from './BrandRow.styles';
import { BrandRowProps } from './BrandRow.types';

const BLUR_FALLBACK =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAgEDBQAAAAAAAAAAAAABAgADBAYHIRESF1GB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/AJbRrnbqjBpTxyt+WtSrZbZnMFdwgBPaBwCwJ+yVs6liQgA68D1EQqypf//Z';

const DocRow = ({
  children,
  title,
  fetchURL,
  square,
  poster,
  store,
  ...rest
}: BrandRowProps) => {
  const [docs, setDocs] = useState<DocObj[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const handleClick = (d: DocObj) => {
    setSelectedDoc(d);
    setShowUnder(true);
  };

  useEffect(() => {
    setDocs(store!);
  }, [fetchURL]);

  return (
    <>
      {!loading && (
        <S.BrandRow display="flex" flexDirection="column" {...rest}>
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
            {docs.map((doc: DocObj) => (
              <SwiperSlide key={doc.id} onClick={() => handleClick(doc)}>
                <ImageCard
                  poster={poster}
                  square={square}
                  title={doc.title}
                  imgSrc={doc.backdrop.data[0].url}
                  blurhash={doc.backdrop.data.blurhash || BLUR_FALLBACK}
                />
              </SwiperSlide>
            ))}
          </StyledSwiper>
          {children}
        </S.BrandRow>
      )}
      {showUnder && (
        <DocBanner
          imgSrc={selectedDoc?.backdrop.data[0].url}
          title={selectedDoc?.title}
          description={selectedDoc?.description}
          slug={selectedDoc?.slug}
          path="brand"
        />
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default DocRow;
