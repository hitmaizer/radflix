import { useState } from 'react';

import ImageCard from '@components/ImageCard';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';

import UnderBanner from '../UnderBanner/UnderBanner';
import * as S from './SkaterRow.styles';
import { SkaterObj, SkaterRowProps } from './SkaterRow.types';

import 'swiper/css';

const Row = ({ title, square, poster, path, ...rest }: SkaterRowProps) => {
  const skaters = useSelector((state: RootState) => state.skaters.skaters);
  const [selectedSkater, setSelectedSkater] = useState<SkaterObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const handleClick = (m: SkaterObj) => {
    setSelectedSkater(m);
    setShowUnder(true);
  };

  return (
    <>
      {!loading && (
        <S.Row
          display="flex"
          flexDirection="column"
          ml={16}
          square={square}
          poster={poster}
          {...rest}
        >
          <Heading size="2xl" fontWeight="700" color="white" mr="auto">
            {title}
          </Heading>
          <S.StyledSwiper
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
            {skaters.map((skater: SkaterObj) => (
              <SwiperSlide key={skater.id} onClick={() => handleClick(skater)}>
                <ImageCard
                  poster={poster}
                  square={square}
                  title={skater.name}
                  imgSrc={
                    square ? skater.backdrop.data.url : skater.poster.data.url
                  }
                  blurhash={
                    square
                      ? skater.backdrop.data.blurhash
                      : skater.poster.data.blurhash
                  }
                />
              </SwiperSlide>
            ))}
          </S.StyledSwiper>
        </S.Row>
      )}

      {showUnder && (
        <UnderBanner
          selectedSkater={selectedSkater}
          path={path}
          slug={selectedSkater?.slug}
        />
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default Row;
