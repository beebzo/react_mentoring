import {Button, Theme, useTheme} from "@mui/material";
import React from "react";
import {getCommonStyles} from "../../Styles/Styles";

const getStyles = (theme: Theme) => ({
  saveButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  resetButton: {
    marginRight: '12px',
    border: `1px solid ${theme.palette.primary.main}`
  }
})

interface ISaveButtonProps {
  onClick: () => void
  label?: string
  isReset?: boolean
}

export const ModalButton: React.FC<ISaveButtonProps> = ({onClick, label, isReset}) => {
  const sx = getStyles(useTheme())
  const {buttonPadding} = getCommonStyles(useTheme());
  const styles = isReset ? {...buttonPadding, ...sx.resetButton} : {...buttonPadding, ...sx.saveButton}
  return (
    <Button onClick={onClick} sx={styles}>
    {label || isReset ? 'RESET' : 'SAVE'}
    </Button>
)
}