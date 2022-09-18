import Image from 'next/image';
import styled, { css } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

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
  position: relative;

  &:hover {
    transform: scale(104%);
    transition-delay: 100ms;
  }
  &:active {
    cursor: grabbing;
  }

  ${({ poster }) =>
    poster &&
    css`
      height: 100%;
      object-fit: cover;
      object-position: top;
      max-height: 600px;
      aspect-ratio: 9 / 16;
    `}

  ${({ square }) =>
    square &&
    css`
      height: 100%;
      object-fit: cover;
      object-position: top;
      max-height: 200px;
      aspect-ratio: 9 / 21;
    `}
`;

export const CardImage = styled(Image).attrs({
  layout: 'fill',
  objectFit: 'cover',
  placeholder: 'blur',
})<Pick<ImageCardProps, 'square' | 'poster'>>`
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;
