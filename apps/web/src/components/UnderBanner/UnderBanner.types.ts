import { ReactNode } from 'react';

import { MovieObj } from '../Banner/Banner.types';

export interface UnderBannerProps {
  children?: ReactNode;
  selectedMovie?: MovieObj;
}
