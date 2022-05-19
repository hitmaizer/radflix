import { ReactNode } from 'react';

import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface ImageCardProps extends SpaceProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  imgSrc?: string;
  title?: string;
  square?: boolean;
  poster?: boolean;
  blurhash?: string;
}
