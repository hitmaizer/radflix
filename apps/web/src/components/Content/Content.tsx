import React from 'react';

import requests from 'src/axios/requests';

import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import * as S from './Content.styles';
import { ContentProps } from './Content.types';

const Content = ({ children, ...rest }: ContentProps) => {
  return (
    <S.Content {...rest}>
      <Banner />
      <Row title="Skateboarding" fetchURL={requests.skateMovies} poster />
      <Row title="Snowboarding" fetchURL={requests.snowboardMovies} square />
      <Row title="Surf" fetchURL={requests.surfMovies} square />
      <Row title="BMX Movies" fetchURL={requests.bmxMovies} square />
      <Row title="Dirt Bikes" fetchURL={requests.dirtbikeMovies} poster />

      {children}
    </S.Content>
  );
};

export default Content;
