import React from "react";
import HeaderBackground from './assets/Bitmap.png'
import {Container, Theme, Typography, useTheme} from "@mui/material";
import HeaderLine from "./HeaderLine/HeaderLine";
import SearchBar from "./SearchBar/SearchBar";

const getStyles = (theme: Theme) => ({
  headerBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${HeaderBackground})`,
    height: 396,
    paddingBottom: '40px',
    width: '100%',
    padding: '10px'
  },
  motto: {
    fontSize: 40,
    color: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
    lineHeight: 1
  },
})

const SEARCH_BAR_TEXT = 'FIND YOUR MOVIE';

export const Header: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
   <Container sx={sx.headerBackground}>
    <HeaderLine />
     <Typography sx={sx.motto}>{SEARCH_BAR_TEXT}</Typography>
     <SearchBar />
   </Container>
  );
}
