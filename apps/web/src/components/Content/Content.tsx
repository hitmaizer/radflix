import React from 'react';

import SkaterRow from '@components/SkaterRow';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import * as S from './Content.styles';
import { ContentProps } from './Content.types';

const Content = ({ children, ...rest }: ContentProps) => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const skateboarding = useSelector(
    (state: RootState) => state.skateboarding.skateboarding
  );
  const snowboarding = useSelector(
    (state: RootState) => state.snowboarding.snowboarding
  );
  const surfing = useSelector((state: RootState) => state.surfing.surfing);
  const bmx = useSelector((state: RootState) => state.bmx.bmx);
  const dirtBikes = useSelector(
    (state: RootState) => state.dirtBikes.dirtBikes
  );
  return (
    <S.Content {...rest}>
      <Banner movies={movies} path="watch" />
      <SkaterRow title="Skaters" poster path="skaters" />
      <Row title="Skateboarding" store={skateboarding} square path="watch" />
      <Row title="Snowboarding" store={snowboarding} square path="watch" />
      <Row title="Surf" store={surfing} square path="watch" />
      <Row title="BMX Movies" store={bmx} square path="watch" />
      <Row title="Dirt Bikes" store={dirtBikes} poster path="watch" />
      {children}
    </S.Content>
  );
};

export default Content;
