import { ReactNode } from 'react';

import { SkaterObj } from '@components/SkaterRow/SkaterRow.types';

import { MovieObj } from '../Banner/Banner.types';

export interface UnderBannerProps {
  children?: ReactNode;
  selectedMovie?: MovieObj;
  selectedSkater?: SkaterObj;
}
