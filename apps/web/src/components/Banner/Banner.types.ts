import { ReactNode } from 'react';

export interface BannerProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

export interface MovieObj {
  id: number;
  attributes: {
    title: string;
    movieLink: string;
    moviePoster: string;
    slug: string;
    releaseYear: number;
    backdropPoster: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
