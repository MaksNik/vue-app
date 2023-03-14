// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'vuex';
import {
  IMovie, IState, SearchMode, SortMode,
} from '@/models/models';
import mutationTypes from '@/store/mutation-types';
import actionTypes from '@/store/action-types';
import Api from '@/modules/api';

function searchMoviesByMode(searchValue: string, mode: SearchMode): Promise<IMovie[]> {
  return Api.getAllMovies()
    .then((movies) => {
      if (!searchValue) {
        return movies;
      }

      return movies.filter((movie: IMovie) => {
        const value = searchValue.toLowerCase();

        if (mode === SearchMode.Genre) {
          return !!movie.genres.find((genre: string) => genre.toLowerCase().includes(value));
        }

        return movie.title.toLowerCase().includes(value);
      });
    });
}

const initialState: IState = {
  moviesList: [],
  searchValue: '',
  selectedMovie: null,
  searchMode: SearchMode.Title,
  sortMode: SortMode.ReleaseDate,
};

export default createStore({
  state: initialState,
  getters: {
    getMoviesList(state): IMovie[] {
      return state.moviesList;
    },
    getSearchValue(state): string {
      return state.searchValue;
    },
    getSelectedMovie(state): IMovie | null {
      return state.selectedMovie;
    },
    getSearchMode(state): SearchMode {
      return state.searchMode;
    },
    getSortMode(state): SortMode {
      return state.sortMode;
    },
  },
  mutations: {
    [mutationTypes.setMoviesList](state, payload) {
      state.moviesList = payload.list;
    },
    [mutationTypes.setSearchValue](state, payload) {
      state.searchValue = payload.value;
    },
    [mutationTypes.setSearchMode](state, payload) {
      state.searchMode = payload.mode;
    },
    [mutationTypes.setSortMode](state, payload) {
      state.sortMode = payload.mode;
    },
    [mutationTypes.setSelectedMovie](state, payload) {
      state.selectedMovie = payload.movie;
    },
    [mutationTypes.sortMoviesList](state) {
      const compareFn = state.sortMode === SortMode.Rating
        ? ((a: any, b: any) => b.imdbRating - a.imdbRating)
        : (a: any, b: any) => a.year - b.year;

      state.moviesList = [...state.moviesList].sort(compareFn);
    },
  },
  actions: {
    async [actionTypes.searchMovies]({ state, dispatch, commit }, value: string) {
      commit(mutationTypes.setSearchValue, { value });
      const results = await searchMoviesByMode(value, state.searchMode);
      commit(mutationTypes.setMoviesList, { list: results });
      commit(mutationTypes.sortMoviesList);
    },
    [actionTypes.setSearchMode]({ state, dispatch, commit }, mode: SearchMode) {
      if (state.searchMode !== mode) {
        commit(mutationTypes.setSearchMode, { mode });

        if (state.searchValue) {
          dispatch(actionTypes.searchMovies, state.searchValue);
        }
      }
    },
    [actionTypes.setSortMode]({ state, dispatch, commit }, mode: SortMode) {
      if (state.sortMode !== mode) {
        commit(mutationTypes.setSortMode, { mode });
        commit(mutationTypes.sortMoviesList);
      }
    },
    [actionTypes.selectMovie]({ state, commit }, id: number) {
      if (!state.selectedMovie || state.selectedMovie?.id !== id) {
        const selectedMovie = [...state.moviesList].find((movie) => movie.id === id);
        commit(mutationTypes.setSelectedMovie, { movie: selectedMovie });
      }
    },
    [actionTypes.unselectMovie]({ commit }) {
      commit(mutationTypes.setSelectedMovie, { movie: null });
    },
  },
  modules: {
  },
});
