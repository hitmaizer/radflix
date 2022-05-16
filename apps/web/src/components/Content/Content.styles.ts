import styled from 'styled-components';

import { mediaQueries } from '@styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
  gap: 16px;
  overflow: hidden;
  ${mediaQueries.lg} {
    gap: 32px;
  }
`;
