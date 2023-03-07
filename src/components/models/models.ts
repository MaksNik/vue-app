export interface IMovie {
  name: string;
  posterUrl?: string;
  genre: string;
  date: Date;
  description?: string;
  rating: number;
  duration?: number;
  promo?: string;
}

// eslint-disable-next-line no-shadow
export enum SearchMode {
  Title = 'title',
  Genre = 'genre'
}

// eslint-disable-next-line no-shadow
export enum SortMode {
  ReleaseDate = 'release date',
  Rating = 'rating'
}
