import React from 'react';
import {Box, Theme, Typography, useTheme} from "@mui/material";

const getStyles = (theme: Theme) => ({
  text: {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
    whiteSpace: 'nowrap',
  },
  secondary: {
    fontWeight: theme.typography.fontWeightRegular
  },
  textContainer: {
    display: 'flex',
  }
})

export const Logo: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.textContainer}>
      <Typography sx={{...sx.text, ...sx.bold}}>netflix</Typography>
      <Typography sx={{...sx.text, ...sx.secondary}}>roulette</Typography>
    </Box>
  )
}