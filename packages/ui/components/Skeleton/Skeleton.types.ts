import { ReactNode } from 'react';

export interface SkeletonProps {
  children?: ReactNode;
  banner?: boolean;
  card?: boolean;
  text?: boolean;
  heading?: boolean;
}
