import {Box, Theme, useTheme} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import {Close} from "@mui/icons-material";
import {Title} from "../Title";
import {toggler} from "../../../consts/types/toggler";

type TSize = 's' | 'l'

const getStyles = (theme: Theme, size: TSize) => ({
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    display: 'flex'
  },
  modal: {
    display: 'flex',
    padding: '12px',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    width: size === 's' ? '60vw': '80vw',
    height: size === 's' ? '25vh' : '80vh',
    margin: 'auto',
  },
  exitButtonContainer: {
    alignSelf: 'flex-end'
  },
  modalWithTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    margin: '0 12px 24px'
  },
  modalContent: {
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'column',
  },
});

interface IModalProps {
  children: React.ReactNode;
  size?: TSize;
  setOpen: toggler;
  title?: string;
}

export const Modal: React.FC<IModalProps> = ({children, size, setOpen, title}) => {
  const sx = getStyles(useTheme(), size);
  const close = () => setOpen(false);
  return ReactDOM.createPortal(
    <Box sx={sx.container}>
      <Box sx={sx.modal}>
        <Box sx={sx.exitButtonContainer}>
          <Close onClick={close} color='secondary' fontSize='large' />
        </Box>
        <Box sx={sx.modalWithTitle}>
          <Box>
            {!!title && <Title text={title} />}
            <Box sx={sx.modalContent}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>,
    document.getElementById('app-modal'),
  );
}