import { useEffect, useState } from 'react';

import ImageCard from '@components/ImageCard';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';

import axios from '../../axios/instance';
import UnderBanner from '../UnderBanner/UnderBanner';
import * as S from './SkaterRow.styles';
import { SkaterObj, SkaterRowProps } from './SkaterRow.types';

import 'swiper/css';

const Row = ({ title, fetchURL, square, poster, ...rest }: SkaterRowProps) => {
  const [skaters, setSkaters] = useState<SkaterObj[]>([]);
  const [selectedSkater, setSelectedSkater] = useState<SkaterObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  const handleClick = (m: SkaterObj) => {
    setSelectedSkater(m);
    setShowUnder(true);
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const request = await axios
        .get(fetchURL)
        .then((res) => setSkaters(res.data?.data))
        .catch((err) => dispatch(setError(err)))
        .finally(() => dispatch(setLoading(false)));
      return request;
    }
    fetchData();
  }, [fetchURL]);

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

      {showUnder && <UnderBanner selectedSkater={selectedSkater} />}

      {error && <p>{error}</p>}
    </>
  );
};

export default Row;
