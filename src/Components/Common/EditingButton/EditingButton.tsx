import React from "react";
import {Button, Theme, useTheme} from "@mui/material";
import {MoreVert} from "@mui/icons-material";

const getStyles = (theme: Theme) => ({
  container: {
    position: 'absolute',
    right: '18px',
    top: '18px',
    width: '36px',
    height: '36px',
    borderRadius: '18px',
    backgroundColor: theme.palette.background.default
  }
})

interface IEditingButtonProps {
  onClick:  React.MouseEventHandler<HTMLButtonElement>;
}

export const EditingButton: React.FC<IEditingButtonProps> = ({onClick}) => {
  const sx = getStyles(useTheme());
  return (
    <Button sx={sx.container} onClick={onClick}>
      <MoreVert color='secondary' />
    </Button>
  )
}