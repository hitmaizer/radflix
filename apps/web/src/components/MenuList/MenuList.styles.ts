import styled from 'styled-components';

import { mediaQueries } from '@styles';

export const MenuList = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 8px;
    gap: 8px;
  }
`;
