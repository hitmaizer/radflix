import { useEffect, useState } from 'react';

import Card from '@components/Card';
import Heading from '@components/Heading';
import { SwiperSlide } from 'swiper/react';

import { Skeleton, Stack } from '@components';

import axios from '../../axios/instance';
import { MovieObj } from '../Banner/Banner.types';
import UnderBanner from '../UnderBanner/UnderBanner';
import * as S from './Row.styles';
import { RowProps } from './Row.types';
import 'swiper/css';

const Row = ({ title, fetchURL, square, poster, ...rest }: RowProps) => {
  const [movies, setMovies] = useState<MovieObj[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleClick = (m: MovieObj) => {
    setSelectedMovie(m);
    setShowUnder(true);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios
        .get(fetchURL)
        .then((res) => setMovies(res.data?.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <>
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
        <S.StyledSwiper slidesPerView={square ? 5 : 7} spaceBetween={8}>
          {movies.map((movie: MovieObj) => (
            <SwiperSlide key={movie.id} onClick={() => handleClick(movie)}>
              <Card
                poster={poster}
                square={square}
                title={movie.attributes.title}
                imgSrc={
                  square
                    ? movie.attributes.backdropPoster
                    : movie.attributes.moviePoster
                }
              />
            </SwiperSlide>
          ))}
        </S.StyledSwiper>
      </S.Row>
      {showUnder && <UnderBanner selectedMovie={selectedMovie} />}
      {loading && (
        <>
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Skeleton heading />
            <Stack display="flex" gridGap="8px">
              <Skeleton card />
              <Skeleton card />
              <Skeleton card />
              <Skeleton card />
              <Skeleton card />
              <Skeleton card />
            </Stack>
          </Stack>
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Row;
