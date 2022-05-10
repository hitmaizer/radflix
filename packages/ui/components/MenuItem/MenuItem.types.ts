import { ReactNode } from 'react';

import { SpaceProps } from 'styled-system';

export interface MenuItemProps extends SpaceProps {
  children?: ReactNode;
  text: string;
  icon: JSX.Element;
}
