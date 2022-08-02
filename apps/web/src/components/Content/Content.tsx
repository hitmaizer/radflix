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
  const oldSkool = useSelector((state: RootState) => state.oldSkool.oldSkool);
  const climbings = useSelector((state: RootState) => state.climbing.climbing);
  const mtbs = useSelector((state: RootState) => state.mtb.mtb);

  return (
    <S.Content {...rest}>
      <Banner movies={movies} path="watch" />
      <SkaterRow title="Skaters" poster path="skaters" />
      <Row
        title="Skateboarding Movies"
        store={skateboarding}
        square
        path="watch"
        shufflePl="skate"
      />
      <Row
        title="Old-School Skate Movies"
        path="watch"
        square
        store={oldSkool}
        shufflePl="oldschool"
      />
      <Row
        title="Snowboarding Movies"
        store={snowboarding}
        square
        path="watch"
        shufflePl="snowboard"
      />
      <Row
        title="Surf Movies"
        store={surfing}
        square
        path="watch"
        shufflePl="surf"
      />
      <Row title="BMX Movies" store={bmx} square path="watch" shufflePl="bmx" />
      <Row
        title="Climbing Movies"
        store={climbings}
        square
        path="watch"
        shufflePl="climbing"
      />
      <Row
        title="MTB Movies"
        store={mtbs}
        square
        path="watch"
        shufflePl="mtb"
      />
      <Row
        title="Dirt Bikes Movies"
        store={dirtBikes}
        poster
        path="watch"
        shufflePl="dirtbikes"
      />
      {children}
    </S.Content>
  );
};

export default Content;
