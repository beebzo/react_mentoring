import React from "react";
import HeaderBackground from './assets/Bitmap.png'
import {Container, Theme, useTheme} from "@mui/material";
import HeaderLine from "./HeaderLine/HeaderLine";
import {MovieDetailsView} from "../MovieDetailsView";
import SearchBar from "./SearchBar/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {selectMovie, setSelectedMovie} from "../../store/moviesSlice";

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
  const selectedMovie = useSelector(selectMovie);
  const dispatch = useDispatch()
  const disableSearch = () => dispatch(setSelectedMovie(undefined));
  const containerStyles = selectedMovie ? sx.container : {...sx.container, ...sx.imageBackground};
  return (
   <Container sx={containerStyles}>
    <HeaderLine isSearch={!!selectedMovie} disableSearch={disableSearch} />
     {selectedMovie ? (
       <MovieDetailsView movie={selectedMovie} />
     ) : (
       <SearchBar />
     )}
   </Container>
  );
}
