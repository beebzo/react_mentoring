import React from "react";
import {Theme, Typography, useTheme} from "@mui/material";

interface ITitleProps {
  text: string
}

const getStyles = (theme: Theme) => ({
  title: {
    fontSize: 40,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightLight,
    lineHeight: 1
  }
})

export const Title: React.FC<ITitleProps> = ({text}) => {
  const sx = getStyles(useTheme());
  return <Typography sx={sx.title}>{text.toUpperCase()}</Typography>
}