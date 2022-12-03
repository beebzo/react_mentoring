import {Box, Button, Theme, useTheme} from "@mui/material";
import {Logo} from "../../../Components/Common";
import React, {useState} from "react";
import {AddEditMovieModal} from "../../AddMovieModal";
import {Search} from "@mui/icons-material";
import {toggler} from "../../../consts/types/toggler";

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

interface IHeaderLineProps {
  isSearch?: boolean;
  disableSearch: () => void;
}

const HeaderLine: React.FC<IHeaderLineProps> = ({isSearch, disableSearch}) => {
  const sx = getStyles(useTheme());
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box sx={sx.container}>
      <Logo />
      {isSearch ? (
        <Search color='primary' onClick={disableSearch}/>
      ) : (
        <Button sx={sx.addMovieButton} onClick={() => setIsModalOpen(true)}>{ADD_MOVIE_TEXT}</Button>
      )}
      {isModalOpen && <AddEditMovieModal setIsOpen={setIsModalOpen} />}
    </Box>
  )
}

export default HeaderLine