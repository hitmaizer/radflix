import React from 'react';

import SkaterRow from '@components/SkaterRow';
import { useSelector } from 'react-redux';
import requests from 'src/axios/requests';
import { RootState } from 'src/redux/store';

import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import * as S from './Content.styles';
import { ContentProps } from './Content.types';

const Content = ({ children, ...rest }: ContentProps) => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  return (
    <S.Content {...rest}>
      <Banner movies={movies} />
      <SkaterRow title="Skaters" fetchURL={requests.skaters} poster />
      <Row title="Skateboarding" fetchURL={requests.skateMovies} square />
      <Row title="Snowboarding" fetchURL={requests.snowboardMovies} square />
      <Row title="Surf" fetchURL={requests.surfMovies} square />
      <Row title="BMX Movies" fetchURL={requests.bmxMovies} square />
      <Row title="Dirt Bikes" fetchURL={requests.dirtbikeMovies} poster />

      {children}
    </S.Content>
  );
};

export default Content;
