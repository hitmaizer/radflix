import Image from 'next/image';
import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

import { HomepageProps } from './Homepage.types';

export const Homepage = styled.div<HomepageProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${position}
  
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.9) 0.01%, rgba(0, 0, 0, 0.6) 33.08%, rgba(0, 0, 0, 0.9) 100%);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(${({ height }) => height}px);
  padding: 16px;
  position: relative;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
