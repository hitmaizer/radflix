import { ArrowBack } from '@styled-icons/evaicons-solid/ArrowBack';
import styled from 'styled-components';

export const Player = styled.iframe`
  width: 100vw;
  height: 100vh;
`;

export const PlayerContainer = styled.div`
  position: relative;
`;

export const BackBtn = styled(ArrowBack)`
  cursor: pointer;
  position: absolute;
  top: 5%;
  left: 5%;
  width: 80px;
  color: white;
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
