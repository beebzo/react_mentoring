import React, {SetStateAction, useState} from "react";
import {
  Box, Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Theme,
  Typography,
  useTheme
} from "@mui/material";

const GENRES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
const SORT_LABEL = 'SORT BY'
const SORT_VALUES = ['RELEASE DATE']

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lightColor: {
    color: theme.palette.primary.light
  },
  tabsContainer: {
    overflow: 'visible'
  },
  tabContainer: {
    minWidth: 0,
  },
  sortingLabel: {
    opacity: 0.61,
    m: 2
  },
  dropdownIcon: {
    "& .MuiSvgIcon-root": {color: theme.palette.primary.main}
  },
  noDropdownOutline: {
    boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  },
  sortingContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export const GenresAndSorting: React.FC = () => {
  const [tabs, setTabs] = useState(0);
  const [sortOption, setSortOption] = useState(SORT_VALUES[0]);
  const sx = getStyles(useTheme());
  const onTabChange = (event: React.SyntheticEvent, value: SetStateAction<number>) => setTabs(value);
  const renderGenreTab = (genre: string) => (
    <Tab label={genre} key={genre} sx={{...sx.tabContainer, ...sx.lightColor}} />
  )
  const renderSortOption = (sortOption: string) => <MenuItem value={sortOption} key={sortOption}>{sortOption}</MenuItem>
  const onSortOptionChange = (event: SelectChangeEvent) => setSortOption(event.target.value)
  return (
    <Container sx={sx.container}>
      <Tabs
        value={tabs}
        onChange={onTabChange}
        textColor='primary.light'
        sx={sx.tabsContainer}
      >
        {GENRES.map(renderGenreTab)}
      </Tabs>
      <Box sx={sx.sortingContainer}>
        <Typography sx={{...sx.sortingLabel, ...sx.lightColor}}>{SORT_LABEL}</Typography>
        <FormControl>
          <Select
            value={sortOption}
            onChange={onSortOptionChange}
            sx={{...sx.lightColor, ...sx.dropdownIcon, ...sx.noDropdownOutline}}
          >
            {SORT_VALUES.map(renderSortOption)}
          </Select>
        </FormControl>
      </Box>
    </Container>
  )
}