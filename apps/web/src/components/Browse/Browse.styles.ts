import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

export const Browse = styled.div`
  ${layout}
  ${flexbox}
  ${space}
  ${position}
  
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray900};
`;
