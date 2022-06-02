import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'src/axios/instance';
import requests from 'src/axios/requests';
import { setError } from 'src/redux/error';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';

import { Heading } from '@ui';

import * as S from './DocBanner.styles';
import { DocBannerProps } from './DocBanner.types';

export interface DocObj {
  backdrop: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  id: number;
  movieLink: string;
  poster: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  slug: string;
  title: string;
}

const DocBanner = ({ children, imgSrc, ...rest }: DocBannerProps) => {
  const [movie, setMovie] = useState<DocObj>();
  const error = useSelector((state: RootState) => state.error.error);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const req = await axios
        .get(requests.allDocs)
        .then((res) =>
          setMovie(
            res.data.data[Math.floor(Math.random() * res.data.data.length)]
          )
        )
        .catch((err) => {
          dispatch(setError(err));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
      return req;
    }
    fetchData();
  }, []);

  return (
    <>
      <S.DocBanner {...rest}>
        <Heading color="#fff">{movie?.title}</Heading>
        <S.SImage src={imgSrc!} layout="fill" />
        {children}
      </S.DocBanner>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default DocBanner;
