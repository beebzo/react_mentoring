import React from "react";
import MuiPopover from '@mui/material/Popover';
import {Box, Button, Theme, useTheme} from "@mui/material";
import {Close} from "@mui/icons-material";
import {toggler} from "../../../consts/types/toggler";

const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '180px'
  },
  exitButtonContainer: {
    alignSelf: 'flex-end'
  },
  button: {
    paddingLeft: '12px',
    color: theme.palette.secondary.main
  }
})

type TButton = {
  label: string;
  onClick: () => void
}

interface IPopoverProps {
  anchorEl: HTMLButtonElement;
  setAnchorEl: toggler;
  buttons: TButton[]
}

export const Popover: React.FC<IPopoverProps> = ({anchorEl, setAnchorEl, buttons}) => {
  if (!anchorEl) return;
  const sx = getStyles(useTheme());
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderButton = ({label, onClick}: TButton) => {
    const handleClick = () => {
      onClick();
      handleClose();
    }
    return <Button onClick={handleClick} key={label} sx={sx.button}>{label}</Button>
  }
  return (
    <MuiPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box sx={sx.container}>
        <Box sx={sx.exitButtonContainer}>
          <Close onClick={handleClose} color='secondary' fontSize='small' />
        </Box>
        {buttons.map(renderButton)}
      </Box>
    </MuiPopover>
  );
};