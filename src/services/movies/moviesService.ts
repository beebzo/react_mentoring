import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IMovie, IResponse} from "../../consts/types/movie";
import {TExportedMovie, TForm} from "../../Views/AddMovieModal";
import {ISortBy, ISortOrder} from "../../store/moviesSlice";


interface IGetMoviesRequestFilters {
  sortBy: keyof ISortBy;
  sortOrder: ISortOrder;
}
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/'}),
    tagTypes: ['Movies'],
    endpoints: (builder) => ({
      getMovies: builder.query<IResponse, IGetMoviesRequestFilters>({
        query: (props) => {
          const propsKeys = Object.keys(props);
          const mappedProps = propsKeys.map(el => `${el}=${props[el]}`).join('&');
          return `movies?${mappedProps}`
        },
        providesTags: [{type: 'Movies'}],
      }),
      createMovie: builder.mutation<IResponse, TForm>({
        query: (payload) => ({
          url: 'movies',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          invalidatesTags: [{type: 'Movies'}],
        }),
      }),
      updateMovie: builder.mutation<IResponse, TExportedMovie>({
        query: (payload) => ({
          url: 'movies',
          method: 'PUT',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: [{type: 'Movies'}],
      }),
      getMovieById: builder.query<IMovie, string>({
        query: (id) => `movies/${id}`,
      }),
      deleteMovie: builder.mutation<void, number>({
        query: (id) => ({
          url: `movies/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [{ type: 'Movies'}],
      }),
    }),
  })
;

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useCreateMovieMutation,
  useDeleteMovieMutation,
  useUpdateMovieMutation
} = moviesApi;