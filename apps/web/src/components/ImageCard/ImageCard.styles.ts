import Image from 'next/image';
import styled, { css } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import { ImageCardProps } from './ImageCard.types';

export const Card = styled.div<ImageCardProps>`
  ${space}
  ${flexbox}
  ${layout}
  width: 100%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
  transition: all 300ms 0ms ease;
  min-height: 200px;
  position: relative;

  &:hover {
    transform: scale(104%);
    transition-delay: 300ms;
  }
  ${({ poster }) =>
    poster &&
    css`
      height: 100%;
      object-fit: cover;
      object-position: top;
      height: 300px;
      max-height: 600px;
      ${mediaQueries.md} {
        height: 400px;
      }
    `}

  ${({ square }) =>
    square &&
    css`
      height: 100%;
      object-fit: cover;
      object-position: top;
      max-height: 200px;
      height: 100px;
      ${mediaQueries.md} {
        height: 200px;
      }
    `}
`;

export const CardImage = styled(Image)<ImageCardProps>`
  object-fit: cover;
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;
