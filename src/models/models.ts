export interface IMovie {
  id: number;
  actors: string[];
  averageRating: number;
  contentRating: string;
  duration: string;
  genres: string[];
  imdbRating: number;
  poster: string;
  posterurl: string;
  ratings: number[];
  releaseDate: string;
  storyline: string;
  title: string;
  year: string;
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
