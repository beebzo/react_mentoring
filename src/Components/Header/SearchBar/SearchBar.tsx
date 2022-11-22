import {Box, Button, Input, Theme, useTheme} from "@mui/material";
import React from "react";

const getStyles = (theme: Theme) => ({
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '12px 0'
  },
  searchBarInput: {
    display: 'flex',
    flex: 3,
    backgroundColor: theme.palette.background.default,
    padding: '0 12px',
    color: theme.palette.secondary.main,
    marginRight: '12px'
  },
  searchBarButton: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  }
})

const PLACEHOLDER = 'What do you want to watch?'
const SEARCH_BUTTON_LABEL = 'Search'

const SearchBar: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.searchBarContainer}>
      <Input sx={sx.searchBarInput} placeholder={PLACEHOLDER} ></Input>
      <Button sx={sx.searchBarButton}>{SEARCH_BUTTON_LABEL}</Button>
    </Box>
  )
}

export default SearchBar