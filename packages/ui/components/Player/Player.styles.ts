import styled from 'styled-components';

import { PlayerProps } from './Player.types';

export const Player = styled.iframe`
  width: 100vw;
  height: 100vh;
`;

export const PlayerContainer = styled.div<PlayerProps>`
  position: relative;
  height: ${({ innerHeight }) => innerHeight}px;
  overflow: hidden;
`;
