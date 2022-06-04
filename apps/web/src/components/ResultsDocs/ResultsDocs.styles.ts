import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Results = styled.div`
  ${layout}
  ${flexbox}
  ${space}
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  margin-left: 2%;
`;
