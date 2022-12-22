import React, {useEffect, useState} from "react";
import {Box, Container, Theme, Typography, Unstable_Grid2, useTheme} from "@mui/material";
import {MovieItem} from "./MovieItem";
import {IMovie} from "../../consts/types/movie";

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
  const  [movies, setMovies] = useState<IMovie[]>([]);
  const sx = getStyles(useTheme())


  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const movies = Array.from(await import('../../consts/mock/top250.json'));
    // TODO create a pagination
    setMovies(movies.slice(0, 31));
  }

  const foundMoviesText = ' movies found';

  return (
    <Container>
      <Box sx={sx.movieCountContainer}>
        <Typography sx={{...sx.count, ...sx.white}}>{movies.length}</Typography>
        <Typography sx={sx.white}>{foundMoviesText}</Typography>
      </Box>
      <Unstable_Grid2 container sx={sx.movieListContainer}>
        {movies.map(movie => (
            <MovieItem
              movie={movie}
              key={movie.name}
            />
          )
        )}
      </Unstable_Grid2>
    </Container>
  )
}