import styled, { css } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { CardProps } from './Card.types';

export const Card = styled.div`
  ${space}
  ${flexbox}
  ${layout}
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 12px;
  cursor: pointer;
  transition: all 300ms 0ms ease;
  &:hover {
    transform: scale(1.08);
    transition-delay: 300ms;
  }
`;

export const Image = styled.img<CardProps>`
  object-fit: cover;
  max-width: 250px;
  border-radius: 12px;
  width: 100%;
  height: 100%;

  ${({ square }) =>
    square &&
    css`
      max-width: 400px;
      object-fit: cover;
      object-position: top;
      border-radius: 12px;
      max-height: 200px;
      width: 350px;
      height: 200px;
    `}
`;
