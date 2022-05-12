import { ReactNode } from 'react';

import { SpaceProps } from 'styled-system';

export interface NavbarProps extends SpaceProps {
  children: ReactNode;
  show?: boolean;
  browse?: boolean;
}
