import { useEffect, useState } from 'react';

import ImageCard from '@components/ImageCard';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { SwiperSlide } from 'swiper/react';

import { Button, Heading, Stack } from '@ui';

import { MovieObj } from '../Banner/Banner.types';
import UnderBanner from '../UnderBanner/UnderBanner';
import * as S from './Row.styles';
import { RowProps } from './Row.types';

import 'swiper/css';

const BLUR_FALLBACK =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAgEDBQAAAAAAAAAAAAABAgADBAYHIRESF1GB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/AJbRrnbqjBpTxyt+WtSrZbZnMFdwgBPaBwCwJ+yVs6liQgA68D1EQqypf//Z';

const Row = ({
  title,
  square,
  poster,
  path,
  store,
  shufflePl,
  ...rest
}: RowProps) => {
  const [movies, setMovies] = useState<MovieObj[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieObj>();
  const [showUnder, setShowUnder] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const handleClick = (m: MovieObj) => {
    setSelectedMovie(m);
    setShowUnder(() => !showUnder);
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

  useEffect(() => {
    setMovies(store!);
  }, [store]);

  return (
    <>
      {!loading && (
        <S.Row display="flex" flexDirection="column" {...rest}>
          <Stack
            display="flex"
            alignItems="end"
            justifyContent="flex-start"
            gridGap="8px"
          >
            <Heading size="2xl" fontWeight="700" color="white">
              {title}
            </Heading>
            {shufflePl && (
              <Button shuffle>
                <Link href={`/watch/${shufflePl}`}>Random one &gt;</Link>
              </Button>
            )}
          </Stack>
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
            {movies.map((movie: MovieObj) => {
              return (
                <SwiperSlide key={movie.id} onClick={() => handleClick(movie)}>
                  <ImageCard
                    poster={poster}
                    square={square}
                    title={movie.title}
                    imgSrc={
                      square ? movie.backdrop.data.url : movie.poster.data.url
                    }
                    blurhash={
                      (poster
                        ? movie.poster.data.placeholder
                        : movie.backdrop.data.placeholder) || BLUR_FALLBACK
                    }
                  />
                </SwiperSlide>
              );
            })}
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
