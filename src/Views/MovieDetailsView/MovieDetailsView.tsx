import React from "react";
import {Box, Theme, Typography, Unstable_Grid2, useTheme} from "@mui/material";
import {ImgMaterial, Title} from "../../Components/Common";
import {Rating} from "../../Components/Common/Rating";
import {IMovie} from "../../consts/types/movie";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    margin: '20px 0'
  },
  lightColor: {
    color: theme.palette.secondary.main
  },
  halfOpacity: {
    opacity: 0.5
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  horizontal: {
    display: 'flex',
    alignItems: 'center'
  },
  spacer: {
    width: '24px',
    opacity: 0
  },
  img: {
    width: 300,
    height: 450,
    marginRight: 8
  },
  marginRight: {
    mr: 6
  }
})

interface IMovieDetailsViewProps {
  movie: IMovie;
}

export const MovieDetailsView: React.FC<IMovieDetailsViewProps> = ({movie}) => {
  const sx = getStyles(useTheme());
  const {poster_path, title, vote_average, genres, release_date, runtime, overview} = movie;

  const rItem = (children: React.ReactNode) => <Unstable_Grid2>{children}</Unstable_Grid2>
  const renderHighlight = (text: string) => (
    <Typography
      variant='h6'
      color='primary'
      sx={sx.marginRight}
    >
      {text}
    </Typography>
  );
  const renderDescription = (text: string) => (
    <Typography
      variant='h6'
      sx={{...sx.lightColor, ...sx.halfOpacity}}
    >
      {text}
    </Typography>
  );

  return (
    <Box sx={sx.container}>
      <ImgMaterial alt='Movie Logo' src={poster_path} sx={sx.img} />
      <Unstable_Grid2 container spacing={5} sx={sx.detailsContainer}>
        <Unstable_Grid2 container spacing={3} sx={sx.horizontal}>
          {rItem(<Title text={title} />)}
          {rItem(<Rating rating={vote_average} />)}
        </Unstable_Grid2>
        {rItem(
          <Typography sx={{...sx.lightColor, ...sx.halfOpacity}}>
            {genres.join(' & ')}
          </Typography>
        )}
        {rItem(<Box sx={sx.horizontal}>
          {renderHighlight(release_date.slice(0, 4))}
          {renderHighlight(`${String(runtime)} minutes`)}
        </Box>)}
        {rItem(renderDescription(overview))}
      </Unstable_Grid2>
    </Box>
  )
}