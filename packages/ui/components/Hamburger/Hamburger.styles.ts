import styled, { css } from 'styled-components';

import { mediaQueries } from '@styles';

import { HamburgerProps } from './Hamburger.types';

export const Container = styled.div`
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;
  ${mediaQueries.lg} {
    display: none;
  }
`;

export const Hamburger = styled.span<HamburgerProps>`
  width: 2em;
  height: 0.1em;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;

  &::before,
  &::after {
    content: '';
    width: 2em;
    height: 0.1em;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    display: block;
    transition: all 300ms ease;
  }

  &::before {
    top: -8px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  &::after {
    bottom: -8px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  ${({ open }) =>
    open === true &&
    css`
      background-color: transparent;
      &::before,
      &::after {
        background-color: ${({ theme }) => theme.colors.white};
      }
      &::before {
        transform: rotate(40deg);
        top: 1px;
      }
      &::after {
        transform: rotate(-40deg);
        bottom: 0px;
      }
    `}
`;

export const HamburgerContent = styled.div<HamburgerProps>`
  position: absolute;
  transform: translateY(-110%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: calc(${({ height }) => height}px - 100px);
  left: 0;
  background-color: ${({ theme }) => theme.colors.gray900};
  transition: transform 600ms ease;
  overflow-y: hidden;
  z-index: -1;
  padding: 32px;
  gap: 48px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ open }) =>
    open === true &&
    css`
      overflow-y: hidden;
      transform: translateY(66px);
    `}

  ${({ web }) =>
    web &&
    css`
      background-color: ${({ theme }) => theme.colors.gray900};
    `}
`;
