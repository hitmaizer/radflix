import styled from 'styled-components';
import { space } from 'styled-system';

export const MenuItem = styled.div`
  ${space}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-start;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
