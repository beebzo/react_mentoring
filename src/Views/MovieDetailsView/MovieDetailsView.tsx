import {IMovie} from "../../consts/types/movie";
import React from "react";
import {Box, Theme, Typography, Unstable_Grid2, useTheme} from "@mui/material";
import {ImgMaterial, Title} from "../../Components/Common";
import {Rating} from "../../Components/Common/Rating";

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
  movie: IMovie
}

export const MovieDetailsView: React.FC<IMovieDetailsViewProps> = ({movie}) => {
  const sx = getStyles(useTheme());
  const {image, name, aggregateRating, genre, datePublished, duration, description} = movie;
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
      <ImgMaterial alt='Movie Logo' src={image} sx={sx.img} />
      <Unstable_Grid2 container spacing={5} sx={sx.detailsContainer}>
        <Unstable_Grid2 container spacing={3} sx={sx.horizontal}>
          {rItem(<Title text={name} />)}
          {rItem(<Rating rating={aggregateRating.ratingValue} />)}
        </Unstable_Grid2>
        {rItem(
          <Typography sx={{...sx.lightColor, ...sx.halfOpacity}}>
            {genre.join(' & ')}
          </Typography>
        )}
        {rItem(<Box sx={sx.horizontal}>
          {renderHighlight(datePublished.slice(0, 4))}
          {renderHighlight(duration)}
        </Box>)}
        {rItem(renderDescription(description))}
      </Unstable_Grid2>
    </Box>
  )
}