import { ReactNode } from 'react';

export interface DocBannerProps {
  children?: ReactNode;
  imgSrc?: string;
  title?: string;
  slug?: string;
  description?: string;
}
