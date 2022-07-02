import styled, { css } from 'styled-components';
import { space } from 'styled-system';

import { mediaQueries } from '@styles';

import { NavbarProps } from './Navbar.types';

export const Navbar = styled.div<NavbarProps>`
  ${space}
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 56px;
  background-color: ${({ theme }) => theme.colors.gray900};
  z-index: 3;
  transition: all 300ms ease;
  padding: 16px 32px;
  min-height: 100px;

  ${mediaQueries.lg} {
    background-color: transparent;
  }

  ${({ show }) =>
    show &&
    css`
      background-color: ${({ theme }) => theme.colors.gray900} !important;
    `}
`;
