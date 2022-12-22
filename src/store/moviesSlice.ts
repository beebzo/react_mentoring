import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from "../consts/types/movie";
import {RootState} from "./store";

export type ISortBy = Pick<IMovie, 'title' | 'vote_average' | 'vote_count' | 'release_date' | 'budget' | 'revenue' | 'runtime'>
export type ISortOrder = "desc" | 'asc'
export type IGenre = 'All' | 'Documentary' | 'Comedy' | 'Horror' | 'Crime'

export const GENRES: IGenre[] = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
export const FIELDS_FOR_SORTING: (keyof ISortBy)[] = ['title', 'vote_average', 'vote_count', 'release_date', 'budget', 'revenue', 'runtime'];

export interface IMoviesState {
  selectedMovie: IMovie | undefined;
  sortBy: keyof ISortBy;
  sortOrder: ISortOrder;
  filter: IGenre;
}

const initialState: IMoviesState = {
  selectedMovie: undefined,
  sortBy: FIELDS_FOR_SORTING[0],
  sortOrder: "desc",
  filter: GENRES[0]
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<IMovie | undefined>) => {
      state.selectedMovie = action.payload;
    },
    setFieldForSorting: (state, action: PayloadAction<keyof ISortBy>) => {
      state.sortBy = action.payload;
    },
    setSortingDirection: (state) => {
      state.sortOrder = state.sortOrder === 'desc' ? 'asc' : 'desc';
    },
    setGenre: (state, action?: PayloadAction<IGenre>) => {
      state.filter = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const {setSelectedMovie, setFieldForSorting, setSortingDirection, setGenre} = moviesSlice.actions;

export const selectMovie = (state: RootState) => state.movies.selectedMovie;
export const selectFieldForSorting = (state: RootState) => state.movies.sortBy;
export const selectSortingDirection = (state: RootState) => state.movies.sortOrder;
export const selectFilter = (state: RootState) => state.movies.filter;

export default moviesSlice.reducer;