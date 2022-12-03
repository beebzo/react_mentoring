import {Box, Button, Input, Theme, useTheme} from "@mui/material";
import React from "react";
import {Title} from "../../../Components/Common";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 150,
    margin: '0 40px 160px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '12px 0'
  },
  input: {
    display: 'flex',
    flex: 3,
    backgroundColor: theme.palette.background.default,
    padding: '0 12px',
    color: theme.palette.secondary.main,
    marginRight: '12px'
  },
  button: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  }
})

const PLACEHOLDER = 'What do you want to watch?'
const SEARCH_BAR_TEXT = 'FIND YOUR MOVIE';

const SEARCH_BUTTON_LABEL = 'Search'

const SearchBar: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.container}>
      <Title text={SEARCH_BAR_TEXT} />
      <Box sx={sx.inputContainer}>
        <Input sx={sx.input} placeholder={PLACEHOLDER} ></Input>
        <Button sx={sx.button}>{SEARCH_BUTTON_LABEL}</Button>
      </Box>
      </Box>
  )
}

export default SearchBar