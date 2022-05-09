import { ReactNode } from 'react';

import {
  LayoutProps,
  SpaceProps,
  ResponsiveValue,
  TextAlignProps,
} from 'styled-system';
import { HeadingElement } from 'styles';

export interface HeadingProps extends LayoutProps, SpaceProps, TextAlignProps {
  as?: HeadingElement;
  size?: ResponsiveValue<'lg' | 'xl' | '2xl' | '3xl' | '4xl'>;
  strong?: boolean;
  glow?: boolean;
  color?: string;
  children: ReactNode;
}

export type StyledHeadingProps = Pick<HeadingProps, 'strong' | 'glow'>;
