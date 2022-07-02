import { ReactNode } from 'react';

export interface HamburgerProps {
  children?: ReactNode;
  open?: boolean;
  onClick?: () => void;
  height?: number;
  web?: boolean;
}
