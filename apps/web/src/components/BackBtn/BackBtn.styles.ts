import { ArrowBack } from '@styled-icons/evaicons-solid/ArrowBack';
import styled from 'styled-components';

export const BackBtn = styled(ArrowBack)`
  cursor: pointer;
  position: absolute;
  top: 5%;
  left: 5%;
  width: 80px;
  color: white;
  transition: all 300ms ease;
  z-index: 3;
  &:hover {
    transform: scale(1.1);
  }
`;
