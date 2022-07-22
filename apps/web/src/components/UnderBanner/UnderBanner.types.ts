import { ReactNode } from 'react';

import { DocObj } from '@components/DocBanner/DocBanner';
import { SkaterObj } from '@components/SkaterRow/SkaterRow.types';

import { MovieObj } from '../Banner/Banner.types';

export interface UnderBannerProps {
  children?: ReactNode;
  selectedMovie?: MovieObj | DocObj;
  selectedSkater?: SkaterObj;
  path?: string;
  slug?: string;
  imgSrc?: string;
}
