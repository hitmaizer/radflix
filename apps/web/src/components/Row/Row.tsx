import { useEffect, useState } from 'react';

import ImageCard from '@components/ImageCard';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Heading } from '@ui';

import axios from '../../axios/instance';
import { MovieObj } from '../Banner/Banner.types';
import UnderBanner from '../UnderBanner/UnderBanner';
import * as S from './Row.styles';
import { RowProps } from './Row.types';

import 'swiper/css';

const Row = ({ title, fetchURL, square, poster, path, ...rest }: RowProps) => {
  const [movies, setMovies] = useState<MovieObj[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  const handleClick = (m: MovieObj) => {
    setSelectedMovie(m);
    setShowUnder(() => !showUnder);
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const request = await axios
        .get(fetchURL)
        .then((res) => setMovies(res.data?.data))
        .catch((err) => dispatch(setError(err)))
        .finally(() => dispatch(setLoading(false)));
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <>
      {!loading && (
        <S.Row display="flex" flexDirection="column" ml={16} {...rest}>
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
            {movies.map((movie: MovieObj) => (
              <SwiperSlide key={movie.id} onClick={() => handleClick(movie)}>
                <ImageCard
                  poster={poster}
                  square={square}
                  title={movie.title}
                  imgSrc={
                    square ? movie.backdrop.data.url : movie.poster.data.url
                  }
                />
              </SwiperSlide>
            ))}
          </S.StyledSwiper>
        </S.Row>
      )}

      {showUnder && (
        <UnderBanner
          selectedMovie={selectedMovie}
          slug={selectedMovie?.slug}
          path={path}
        />
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default Row;
