import { ReactNode } from 'react';

import { DocObj } from '@components/DocBanner/DocBanner';

export interface UnderDocsProps {
  children?: ReactNode;
  selectedDoc: DocObj;
  path?: string;
  slug?: string;
}
