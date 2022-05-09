import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

export const Input = styled.input`
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  height: 70px;
  min-width: 500px;
  text-indent: 10px;
  border: solid 1px #8c8c8c;
  &::placeholder {
    font-size: medium;
  }
`;
