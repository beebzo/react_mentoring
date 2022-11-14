import {Box, Button, Theme, useTheme} from "@mui/material";
import {Logo} from "../../Common";
import React from "react";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  addMovieButton: {
    background: 'rgba(96, 96, 96, 0.68)',
    fontWeight: theme.typography.fontWeightMedium
  }
})

const ADD_MOVIE_TEXT = '+ Add movie';

const HeaderLine: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.container}>
      <Logo />
      <Button sx={sx.addMovieButton}>{ADD_MOVIE_TEXT}</Button>
    </Box>
  )
}

export default HeaderLine