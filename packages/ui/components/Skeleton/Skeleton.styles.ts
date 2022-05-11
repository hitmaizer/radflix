import styled, { css, keyframes } from 'styled-components';

import { SkeletonProps } from './Skeleton.types';

export const Skeleton = styled.div<SkeletonProps>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray300};
  margin: 10px 0;
  border-radius: 4px;

  ${({ text }) =>
    text &&
    css`
      width: 100%;
      height: 12px;
    `}

  ${({ card }) =>
    card &&
    css`
      width: 400px;
      height: 200px;
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
      height: 80vh;
      width: 100%;
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
