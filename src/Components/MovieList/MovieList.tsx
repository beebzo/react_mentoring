import React, {useEffect, useState} from "react";
import {Box, Container, Grid, Theme, Typography, useTheme} from "@mui/material";
import {MovieItem} from "./MovieItem";

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
    flexWrap: 'wrap'
  }
})

export const MovieList: React.FC = () => {
  const  [movies, setMovies] = useState([]);
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
      <Grid container sx={sx.movieListContainer} columnSpacing={{xs:12}}>
        {movies.map(movie => (
            <MovieItem
              image={movie.image}
              datePublished={movie.datePublished}
              name={movie.name}
              genre={movie.genre}
              key={movie.name}
            />
          )
        )}
      </Grid>
    </Container>
  )
}