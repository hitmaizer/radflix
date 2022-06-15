import { ReactNode } from 'react';

import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface SkaterRowProps extends SpaceProps, FlexboxProps, LayoutProps {
  children?: ReactNode;
  title: string;
  fetchURL: string;
  square?: boolean;
  isBigRow?: boolean;
  poster?: boolean;
  path?: string;
}

export interface SkaterObj {
  id: number;
  name: string;
  link: string;
  slug: string;
  bio: string;
  poster: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  backdrop: {
    data: {
      url: string;
      blurhash: string;
    };
  };
}
