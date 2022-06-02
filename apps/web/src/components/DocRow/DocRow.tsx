import React, { useState, useEffect } from 'react';

import DocBanner from '@components/DocBanner';
import { DocObj } from '@components/DocBanner/DocBanner';
import ImageCard from '@components/ImageCard';
import { StyledSwiper } from '@components/SkaterRow/SkaterRow.styles';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'src/axios/instance';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';
import 'swiper/css';

import * as S from './DocRow.styles';
import { DocRowProps } from './DocRow.types';

const DocRow = ({
  children,
  title,
  fetchURL,
  square,
  poster,
  ...rest
}: DocRowProps) => {
  const [docs, setDocs] = useState<DocObj[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  const handleClick = (d: DocObj) => {
    setSelectedDoc(d);
    setShowUnder(true);
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const request = await axios
        .get(fetchURL!)
        .then((res) => setDocs(res.data?.data))
        .catch((err) => dispatch(setError(err)))
        .finally(() => dispatch(setLoading(false)));
      return request;
    }
    fetchData();
  }, [fetchURL]);

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
            {docs.map((doc: DocObj) => (
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
        <DocBanner
          imgSrc={selectedDoc?.backdrop.data.url}
          title={selectedDoc?.title}
          description={selectedDoc?.description}
          slug={selectedDoc?.slug}
        />
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default DocRow;
