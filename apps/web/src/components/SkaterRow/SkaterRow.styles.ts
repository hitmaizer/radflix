import { CardProps } from '@ui/Card/Card.types';
import styled, { css } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';
import { Swiper } from 'swiper/react';

export const Row = styled.div<CardProps>`
  ${layout}
  ${flexbox}
  ${space}
  width: 100%;
  gap: 0px;
  z-index: 0;
  ${({ square }) =>
    square &&
    css`
      min-height: 200px;
    `}
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding: 32px;
`;

export const UnderBanner = styled.div`
  width: 100%;
  height: 50vh;
`;

export const UnderContent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: self-start;
  justify-content: center;
  height: 100%;
  margin-left: 5%;
  gap: 16px;
`;
