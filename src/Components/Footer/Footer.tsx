import {Box, Theme, useTheme} from "@mui/material";
import React from "react";
import {Logo} from "../Common";

const getStyles = (theme: Theme) => ({
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px',
    backgroundColor: theme.palette.secondary.main
  }
});

export const Footer: React.FC = () => {
  const sx = getStyles(useTheme());
  return (
    <Box sx={sx.footerContainer}>
      <Logo />
    </Box>
  )
}
