export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  posterPath: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  duration: number;
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

export interface IState {
  moviesList: IMovie[];
  searchValue: string;
  selectedMovie: IMovie | null;
  searchMode: SearchMode;
  sortMode: SortMode;
}
