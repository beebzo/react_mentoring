import React from "react";
import {Modal} from "../../Components/Common";
import {Typography} from "@mui/material";
import {toggler} from "../../consts/types/toggler";

interface IDeleteMovieModal {
  setIsOpen: toggler;
}
export const DeleteMovieModal: React.FC<IDeleteMovieModal> = ({setIsOpen}) => {
  return (
    <Modal
      setOpen={setIsOpen}
      title='Delete Movie'
      buttons={[{label: 'Confirm'}]}
      size='s'
    >
      <Typography color='secondary'>Are you sure you want to delete this move</Typography>
    </Modal>
  )
}