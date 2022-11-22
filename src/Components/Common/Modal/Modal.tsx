import {Box, Button, Theme, useTheme} from "@mui/material";
import React, {MouseEventHandler} from "react";
import ReactDOM from "react-dom";
import {Close} from "@mui/icons-material";
import {Title} from "../Title";

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
    width: '80vw',
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
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    padding: '12px 48px',
  },
  isNotLast: {
    marginRight: '12px',
    border: `1px solid ${theme.palette.primary.main}`
  },
  isLast: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  }
});

export type TModalButton = {onClick?: MouseEventHandler<HTMLButtonElement>, label: string, style?: 'main' | 'secondary'}

interface IModalProps {
  children: React.ReactNode;
  size?: TSize;
  setOpen: (isOpen: boolean) => void;
  title?: string;
  buttons: TModalButton[]
}

export const Modal: React.FC<IModalProps> = ({children, size, setOpen, title, buttons}) => {
  const sx = getStyles(useTheme(), size);
  const close = () => setOpen(false);
  const renderButton = (el: TModalButton, i, arr) => {
    const isLast = i === arr.length - 1;
    const additionalStyles = isLast ? sx.isLast : sx.isNotLast;
    return (
    <Button onClick={el.onClick} sx={{...sx.button, ...additionalStyles}} key={el.label}>
      {el.label}
    </Button>
    )
  };
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
          {!!buttons && (
            <Box sx={sx.buttonsContainer}>
              {buttons.map(renderButton)}
            </Box>
          )}
        </Box>
      </Box>
    </Box>,
    document.getElementById('app-modal'),
  );
}