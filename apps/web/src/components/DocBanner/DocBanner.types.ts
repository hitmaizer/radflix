import { ReactNode } from 'react';

import { MovieObj } from '@components/Banner/Banner.types';

export interface DocBannerProps {
  children?: ReactNode;
  imgSrc?: string;
  title?: string;
  slug?: string;
  description?: string;
  path?: string;
  docs: MovieObj[];
}
