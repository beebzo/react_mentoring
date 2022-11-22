import React from "react";
import HeaderBackground from './assets/Bitmap.png'
import {Container, Theme, useTheme} from "@mui/material";
import HeaderLine from "./HeaderLine/HeaderLine";
import {HeaderContent} from "./HeaderContent";

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
  }
})

export const Header: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
   <Container sx={sx.headerBackground}>
    <HeaderLine />
    <HeaderContent />
   </Container>
  );
}
