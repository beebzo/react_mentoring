import {Box, Button, Theme, useTheme} from "@mui/material";
import {Logo} from "../../Common";
import React, {useState} from "react";
import {AddEditMovieModal} from "../../../Views/AddMovieModal";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addMovieButton: {
    background: 'rgba(96, 96, 96, 0.68)',
    fontWeight: theme.typography.fontWeightMedium
  }
})

const ADD_MOVIE_TEXT = '+ Add movie';

const HeaderLine: React.FC = () => {
  const sx = getStyles(useTheme());
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box sx={sx.container}>
      <Logo />
      <Button sx={sx.addMovieButton} onClick={() => setIsModalOpen(true)}>{ADD_MOVIE_TEXT}</Button>
      {isModalOpen && <AddEditMovieModal setIsOpen={setIsModalOpen} />}
    </Box>
  )
}

export default HeaderLine