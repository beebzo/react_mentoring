import React from "react";
import {Modal} from "../../Components/Common";
import {Typography} from "@mui/material";
import {toggler} from "../../consts/types/toggler";
import {useDeleteMovieMutation} from "../../services/movies/moviesService";

interface IDeleteMovieModal {
  setIsOpen: toggler;
  movieId: number;
}
export const DeleteMovieModal: React.FC<IDeleteMovieModal> = ({setIsOpen, movieId}) => {
  const [deleteMovie] = useDeleteMovieMutation();
  const handleClick = () => {
    deleteMovie(movieId)
    setIsOpen(false)
  }
  return (
    <Modal
      setOpen={setIsOpen}
      title='Delete Movie'
      buttons={[{label: 'Confirm', onClick: handleClick}]}
      size='s'
    >
      <Typography color='secondary'>Are you sure you want to delete this move</Typography>
    </Modal>
  )
}