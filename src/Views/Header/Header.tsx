import React, {useContext} from "react";
import HeaderBackground from './assets/Bitmap.png'
import {Container, Theme, useTheme} from "@mui/material";
import HeaderLine from "./HeaderLine/HeaderLine";
import {SelectedMovieContext} from "../../Contexts/selectedMovieContextProvider";
import {MovieDetailsView} from "../MovieDetailsView";
import SearchBar from "./SearchBar/SearchBar";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backdropFilter: 'brightness(50%)',
    paddingBottom: '40px',
    width: '100%',
    padding: '10px'
  },
  imageBackground: {
    backgroundImage: `url(${HeaderBackground})`,
    backdropFilter: 'brightness(50%)',
  }
})

export const Header: React.FC = () => {
  const sx = getStyles(useTheme());
  const {selectedMovie, setSelectedMovie} = useContext(SelectedMovieContext);
  const disableSearch = () => setSelectedMovie(false);
  const containerStyles = selectedMovie ? sx.container : {...sx.container, ...sx.imageBackground};
  return (
   <Container sx={containerStyles}>
    <HeaderLine isSearch={selectedMovie} disableSearch={disableSearch} />
     {selectedMovie ? (
       <MovieDetailsView movie={selectedMovie} />
     ) : (
       <SearchBar />
     )}
   </Container>
  );
}
