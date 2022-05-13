import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Loading = styled.div`
  ${space}
  ${flexbox}
  ${layout}

  min-width: 100vw;
  height: 100vh;
  padding-top: 30vh;
  gap: 16px;
  place-items: flex-start;
`;
