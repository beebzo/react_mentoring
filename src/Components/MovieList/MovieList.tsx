import React from "react";
import movies from '../../consts/mock/top250.json'
import {Box, Container, Grid, Theme, Typography, useTheme} from "@mui/material";
import {MovieItem} from "./MovieItem";

const MOCK_MOVIE_LIST = movies.slice(0, 30);

const getStyles = (theme: Theme) => ({
  movieCountContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  white: {
    color: theme.palette.primary.light
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
  const foundMoviesText = ' movies found';
  const sx = getStyles(useTheme())
  return (
    <Container>
      <Box sx={sx.movieCountContainer}>
        <Typography sx={{...sx.count, ...sx.white}}>{MOCK_MOVIE_LIST.length}</Typography>
        <Typography sx={sx.white}>{foundMoviesText}</Typography>
      </Box>
      <Grid container sx={sx.movieListContainer} columnSpacing={{xs:12}}>
        {MOCK_MOVIE_LIST.map(movie => (
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