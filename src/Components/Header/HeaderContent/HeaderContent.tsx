import React from "react";
import {Box, Theme, useTheme} from "@mui/material";
import {Title} from "../../Common";
import SearchBar from "../SearchBar/SearchBar";

const SEARCH_BAR_TEXT = 'FIND YOUR MOVIE';

const getStyles = (theme: Theme) => ({
  container: {
    margin: '0 40px 210px'
  },
})

export const HeaderContent: React.FC = () => {
  const sx = getStyles(useTheme())
  return (
    <Box sx={sx.container}>
      <Title text={SEARCH_BAR_TEXT} />
      <SearchBar />
    </Box>
  )
}