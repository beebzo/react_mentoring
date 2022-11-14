import {Box, Container, Theme, useTheme} from "@mui/material";
import React from "react";

interface IMainContentProps {
  children: React.ReactNode
}

const getStyles = (theme: Theme) => ({
  container: {
    width: '100%',
    marginTop: '10px',
    backgroundColor: theme.palette.background.paper
  }
})

export const MainContent: React.FC<IMainContentProps> = ({children}) => {
  const sx = getStyles(useTheme());
  return <Container sx={sx.container}>{children}</Container>
}