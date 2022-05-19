import Image from 'next/image';
import styled, { css } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import { ImageCardProps } from './ImageCard.types';

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
  height: 450px;
  &:hover {
    transform: scale(1.08);
    transition-delay: 300ms;
  }
`;

export const CardImage = styled(Image)<ImageCardProps>`
  object-fit: cover;
  max-width: 250px;
  border-radius: 12px;
  width: 100%;
  height: 100%;

  ${({ square }) =>
    square &&
    css`
      max-width: 600px;
      object-fit: cover;
      object-position: top;
      border-radius: 12px;
      max-height: 200px;
      width: 100%;
      height: 100px;
      ${mediaQueries.md} {
        height: 200px;
        width: 100%;
      }
    `}

  ${({ poster }) =>
    poster &&
    css`
      object-fit: cover;
      object-position: top;
      border-radius: 12px;
      max-width: 250px;
      height: 300px;
      max-height: 600px;
      ${mediaQueries.md} {
        height: 400px;
        width: 100%;
      }
    `}
`;
