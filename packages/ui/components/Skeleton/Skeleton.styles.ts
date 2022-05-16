import styled, { css, keyframes } from 'styled-components';

import { mediaQueries } from '@styles';

import { SkeletonProps } from './Skeleton.types';

export const Skeleton = styled.div<SkeletonProps>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 12px;
  overflow: hidden;

  ${({ text }) =>
    text &&
    css`
      width: 100%;
      height: 12px;
    `}

  ${({ card }) =>
    card &&
    css`
      width: 150px;
      height: 100px;
      ${mediaQueries.lg} {
        width: 400px;
        height: 200px;
      }
    `}
    
  ${({ banner }) =>
    banner &&
    css`
      height: 80vh;
      width: 100%;
    `}
  
  ${({ heading }) =>
    heading &&
    css`
      height: 30px;
      width: 300px;
      ${mediaQueries.lg} {
        height: 60px;
        width: 600px;
      }
    `}
`;

const loading = keyframes`
  0% { transform: translateX(-150%) }
  50% { transform: translateX(-60%) }
  100% { transform: translateX(150%) }
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-name: ${loading};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transition: all 300ms ease;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
`;
