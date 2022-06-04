import * as HoverCard from '@radix-ui/react-hover-card';
import { Search, BellFill } from '@styled-icons/bootstrap';
import { User, ChevronDown } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Logged = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  gap: 16px;
`;

export const Content = styled(HoverCard.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: flex-start;
  gap: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  padding: 32px;
  margin-top: 32px;
`;

export const ChevronIcon = styled(ChevronDown)`
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    transform: rotateZ(180deg);
  }
`;

export const UserIcon = styled(User)`
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  cursor: pointer;
`;

export const BellIcon = styled(BellFill)`
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray50};
  text-indent: 15px;
  border-radius: 4px;
  height: 32px;
  width: 150px;
  transition: width 300ms ease;
  &:focus {
    width: 400px;
  }
`;
