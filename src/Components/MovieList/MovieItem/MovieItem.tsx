import React from "react";
import {ImgMaterial} from "../../Common";
import {Box, Grid, Theme, Typography, useTheme} from "@mui/material";

interface IMovieItemProps {
  image: string;
  datePublished: string;
  name: string;
  genre: string[];
}

const getStyles = (theme: Theme) => ({
  container: {
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
    color: theme.palette.primary.light
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
})

export const MovieItem: React.FC<IMovieItemProps> = ({image, name, genre, datePublished}) => {
  const sx = getStyles(useTheme());
  const year = datePublished.slice(0, 4);
  return (
    <Grid item sx={sx.container} xs={4}>
      <ImgMaterial alt={name} src={image} sx={sx.image} />
      <Box sx={sx.firstLine}>
        <Typography sx={{...sx.lightColor, ...sx.regularFontWeight}} variant='h6'>{name}</Typography>
        <Box sx={sx.yearContainer}>
          <Typography sx={sx.lightColor}>{year}</Typography>
        </Box>
      </Box>
      <Typography sx={{...sx.lightColor, ...sx.halfOpacity}}>{genre.join()}</Typography>
    </Grid>
  )
}