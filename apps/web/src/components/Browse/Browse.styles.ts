import styled, { css } from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

import { BrowseProps } from './Browse.types';

export const Browse = styled.div<BrowseProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${position}
  
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.gray900};
  overflow: hidden;

  ${({ open }) =>
    open &&
    css`
      position: fixed;
    `}
`;
