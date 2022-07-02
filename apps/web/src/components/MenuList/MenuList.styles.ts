import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import { MenuListProps } from './MenuList.types';

export const MenuList = styled.div<MenuListProps>`
  ${space}
  ${layout}

  display: none;
  width: 100%;
  ${mediaQueries.lg} {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 8px;
  }

  ${({ mob }) =>
    mob &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

export const ListWrapper = styled.div<MenuListProps>`
  ${layout}
  ${space}
  ${flexbox}
  ${gridGap}
  
  ${({ mob }) =>
    mob &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 64px;
      a {
        font-size: 24px;
      }
    `}
`;
