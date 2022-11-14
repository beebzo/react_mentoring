import {Box, Button, Input, Theme, useTheme} from "@mui/material";
import React from "react";

const getStyles = (theme: Theme) => ({
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 40px 210px',
  },
  searchBarInput: {
    display: 'flex',
    flex: 3,
    backgroundColor: theme.palette.background.default,
    m: 2,
    padding: '0 12px',
    color: theme.palette.primary.light
  },
  searchBarButton: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light
  }
})

const SearchBar: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.searchBarContainer}>
      <Input sx={sx.searchBarInput} placeholder="What do you want to watch?" ></Input>
      <Button sx={sx.searchBarButton}>Search</Button>
    </Box>
  )
}

export default SearchBar