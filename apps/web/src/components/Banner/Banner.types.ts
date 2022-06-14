import { ReactNode } from 'react';

export interface BannerProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  movies: MovieObj[];
}

export interface MovieObj {
  id: number;
  title: string;
  movieLink: string;
  poster: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  slug: string;
  releaseYear: number;
  backdrop: {
    data: {
      url: string;
      blurhash: string;
    };
  };
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
