import React, {useState} from "react";
import {ImgMaterial} from "../../Common";
import {Box, Theme, Typography, useTheme} from "@mui/material";
import {Popover} from "../../Common/Popover";
import {EditingButton} from "../../Common/EditingButton";
import Grid2 from "@mui/material/Unstable_Grid2";
import {DeleteMovieModal} from "../../../Views/DeleteMovieModal";
import {AddEditMovieModal} from "../../../Views/AddMovieModal";
import {IMovie} from "../../../consts/types/movie";
import {useDispatch} from "react-redux";
import {setSelectedMovie} from "../../../store/moviesSlice";

interface IMovieItemProps {
  movie: IMovie;
}

const getStyles = (theme: Theme) => ({
  container: {
    position: 'relative',
    width: '300px',
    marginBottom: '48px',
  },
  image: {
    height: '450px'
  },
  yearContainer: {
    border: `1px solid ${theme.palette.background.default}`,
    borderRadius: '4px',
    padding: '0 12px'
  },
  lightColor: {
    color: theme.palette.secondary.main
  },
  halfOpacity: {
    opacity: 0.5
  },
  regularFontWeight: {
    fontWeight: theme.typography.fontWeightRegular
  },
  firstLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export const MovieItem: React.FC<IMovieItemProps> = ({movie}) => {
  const sx = getStyles(useTheme());
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const {poster_path, title, genres, release_date} = movie;
  const year = release_date.slice(0, 4);
  const popoverButtons = [
    {label: 'Edit', onClick: () => setIsEditModalOpen(true)},
    {label: 'Delete', onClick: () => setIsDeleteModalOpen(true)}
  ];
  return (
    <>
      <Grid2
        sx={sx.container}
        xs={4}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => dispatch(setSelectedMovie(movie))}
      >
        {(isHovered || anchorEl) && (
          <EditingButton onClick={event => setAnchorEl(event.currentTarget)}/>
        )}
        <ImgMaterial alt={title} src={poster_path} sx={sx.image}/>
        <Box sx={sx.firstLine}>
          <Typography sx={{...sx.lightColor, ...sx.regularFontWeight}} variant="h6">{title}</Typography>
          <Box sx={sx.yearContainer}>
            <Typography sx={sx.lightColor}>{year}</Typography>
          </Box>
        </Box>
        <Typography sx={{...sx.lightColor, ...sx.halfOpacity}}>{genres.join(', ')}</Typography>
      </Grid2>
      <Popover anchorEl={anchorEl} buttons={popoverButtons} setAnchorEl={setAnchorEl}/>
      {isEditModalOpen && <AddEditMovieModal setIsOpen={setIsEditModalOpen} movie={movie}/>}
      {isDeleteModalOpen && <DeleteMovieModal setIsOpen={setIsDeleteModalOpen} movieId={movie.id}/>
}
</>
)
  ;
};