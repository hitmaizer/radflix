import { ReactNode } from 'react';

export interface BannerProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  movies: MovieObj[];
  path?: string;
  slug?: string;
}

export interface MovieObj {
  id: number;
  title: string;
  movieLink: string;
  poster: {
    data: {
      url: string;
      placeholder: string;
    };
  };
  slug: string;
  releaseYear: number;
  backdrop: {
    data: {
      url: string;
      placeholder: string;
    };
  };
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
