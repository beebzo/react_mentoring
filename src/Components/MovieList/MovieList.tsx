import React from "react";
import {Box, Container, Theme, Typography, Unstable_Grid2, useTheme} from "@mui/material";
import {MovieItem} from "./MovieItem";
import {useGetMoviesQuery} from "../../services/movies/moviesService";
import {IMovie} from "../../consts/types/movie";
import {useSelector} from "react-redux";
import {selectFieldForSorting, selectFilter, selectSortingDirection} from "../../store/moviesSlice";

const getStyles = (theme: Theme) => ({
  movieCountContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  white: {
    color: theme.palette.secondary.main
  },
  count: {
    fontWeight: theme.typography.fontWeightBold,
    m: 1
  },
  movieListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export const MovieList: React.FC = () => {
  const sx = getStyles(useTheme());
  const sortBy = useSelector(selectFieldForSorting);
  const sortOrder = useSelector(selectSortingDirection);
  const filter = useSelector(selectFilter)
  const params = {sortBy, sortOrder}
  if (filter !== 'All') {
    params.filter = filter
  }
  const {data, error, loading} = useGetMoviesQuery(params);

  const foundMoviesText = ' movies found';

  if (!data) return null;
  const movies = data?.data;
  const renderMovie = (movie: IMovie) => <MovieItem movie={movie} key={movie.title} />

  return (
    <Container>
      <Box sx={sx.movieCountContainer}>
        <Typography sx={{...sx.count, ...sx.white}}>{data?.totalAmount}</Typography>
        <Typography sx={sx.white}>{foundMoviesText}</Typography>
      </Box>
      <Unstable_Grid2 sx={sx.movieListContainer} container>
        {movies?.map(renderMovie)}
      </Unstable_Grid2>
    </Container>
  )
}