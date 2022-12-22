import React from "react";
import {
  Box, Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent, SvgIconProps,
  Tab,
  Tabs,
  Theme,
  Typography,
  useTheme
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
  FIELDS_FOR_SORTING,
  GENRES,
  ISortBy,
  selectFieldForSorting,
  selectFilter,
  selectSortingDirection,
  setFieldForSorting, setGenre,
  setSortingDirection
} from "../../../store/moviesSlice";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

const SORT_LABEL = 'SORT BY';

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lightColor: {
    color: theme.palette.secondary.main
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
    boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': {border: 0}
  },
  sortingContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export const GenresAndSorting: React.FC = () => {
  const sortBy = useSelector(selectFieldForSorting);
  const sortOrder = useSelector(selectSortingDirection);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const sx = getStyles(useTheme());

  const tabToRender = GENRES.findIndex(el => el === filter)
  const onTabChange = (event: React.SyntheticEvent, value: number) => dispatch(setGenre(GENRES[value]));
  const renderGenreTab = (genre: string) => (
    <Tab label={genre} key={genre} sx={{...sx.tabContainer, ...sx.lightColor}}/>
  );
  const renderSortOption = (sortBy: keyof ISortBy) => (
    <MenuItem
      value={sortBy}
      key={sortBy}
      sx={sx.lightColor}
    >
      {sortBy.toUpperCase().replace('_', ' ')}
    </MenuItem>
  );
  const sortingDirectionIconProps: SvgIconProps = {
    color: "primary",
    onClick: () => dispatch(setSortingDirection())
  };
  const onSortOptionChange = (event: SelectChangeEvent) => dispatch(setFieldForSorting(event.target.value as keyof ISortBy));
  return (
    <Container sx={sx.container}>
      <Tabs
        value={tabToRender}
        onChange={onTabChange}
        textColor="secondary"
        sx={sx.tabsContainer}
      >
        {GENRES.map(renderGenreTab)}
      </Tabs>
      <Box sx={sx.sortingContainer}>
        <Typography sx={{...sx.sortingLabel, ...sx.lightColor}}>{SORT_LABEL}</Typography>
        <FormControl>
          <Select
            value={sortBy}
            onChange={onSortOptionChange}
            sx={{...sx.lightColor, ...sx.dropdownIcon, ...sx.noDropdownOutline}}
          >
            {FIELDS_FOR_SORTING.map(renderSortOption)}
          </Select>
        </FormControl>
        {sortOrder === 'desc' ? (
          <ArrowDownward {...sortingDirectionIconProps} />
        ) : (
          <ArrowUpward {...sortingDirectionIconProps} />
        )}
      </Box>
    </Container>
  );
};