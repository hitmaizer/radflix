import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

export const BrandRow = styled.div`
  ${flexbox}
  ${layout}
  ${space}

  margin-left: 16px;

  ${mediaQueries.lg} {
    margin-left: 60px;
  }
`;
