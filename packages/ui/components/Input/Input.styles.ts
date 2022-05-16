import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

import { mediaQueries } from '@styles';

export const Input = styled.input`
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  height: 70px;
  min-width: 150px;
  text-indent: 10px;
  border: solid 1px #8c8c8c;
  &::placeholder {
    font-size: medium;
  }
  ${mediaQueries.lg} {
    min-width: 500px;
  }
`;
