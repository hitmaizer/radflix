import { useState } from 'react';

import ImageCard from '@components/ImageCard';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { FreeMode } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';

import UnderBanner from '../UnderBanner/UnderBanner';
import * as S from './SkaterRow.styles';
import { SkaterObj, SkaterRowProps } from './SkaterRow.types';

const BLUR_FALLBACK =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAmEAACAQIEBQUAAAAAAAAAAAABAgMEBQAREkEGISIxYQcTFCQy/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABkRAQADAQEAAAAAAAAAAAAAAAEAAgMREv/aAAwDAQACEQMRAD8Ab9X+MLMbXX22jtFW969qKoirHcudaMGXPJsyTo7efGJu1k4iu5Nyqbjc4p6z7EkaVmhUZ+ogLsAT22wrb0SokuTzqsrgFgzjUc82588Xqjij+JB0L+F28YLbS2TwiPI1Gf/Z';

const Row = ({ title, square, poster, path, ...rest }: SkaterRowProps) => {
  const skaters = useSelector((state: RootState) => state.skaters.skaters);
  const [selectedSkater, setSelectedSkater] = useState<SkaterObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const handleClick = (m: SkaterObj) => {
    setSelectedSkater(m);
    setShowUnder(!showUnder);
    if (showUnder === false) {
      window.scrollTo({
        top: window.pageYOffset + 400,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: window.pageYOffset - 400,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {!loading && (
        <S.Row
          display="flex"
          flexDirection="column"
          square={square}
          poster={poster}
          {...rest}
        >
          <Heading size="2xl" fontWeight="700" color="white" mr="auto">
            {title}
          </Heading>
          <S.StyledSwiper
            modules={[FreeMode]}
            freeMode
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
            {skaters.map((skater: SkaterObj) => {
              return (
                <SwiperSlide
                  key={skater.id}
                  onClick={() => handleClick(skater)}
                >
                  <ImageCard
                    poster={poster}
                    square={square}
                    title={skater.name}
                    imgSrc={
                      square ? skater.backdrop.data.url : skater.poster.data.url
                    }
                    blurhash={skater.poster.data.placeholder || BLUR_FALLBACK}
                  />
                </SwiperSlide>
              );
            })}
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
