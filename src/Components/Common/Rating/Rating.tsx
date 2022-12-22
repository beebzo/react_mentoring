import {Box, Theme, Typography, useTheme} from "@mui/material";
import React from "react";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    width: '60px',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.secondary.main}`
  }
})

interface IRatingProps {
  rating: number
}

export const Rating: React.FC<IRatingProps> = ({rating}) => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.container}>
      <Typography variant='h6' color='secondary'>{rating}</Typography>
    </Box>
  )
}