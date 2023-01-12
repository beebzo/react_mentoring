import React from "react";
import {Modal, LabeledForm} from "../../Components/Common";
import {
  Box,
  Stack,
  Theme,
  useTheme
} from "@mui/material";
import {toggler} from "../../consts/types/toggler";
import {IMovie} from "../../consts/types/movie";
import {mockGenres} from "../../consts/mock/mockedData";
import {getCommonStyles} from "../../Components/Common/Styles/Styles";
import {useCreateMovieMutation, useUpdateMovieMutation} from "../../services/movies/moviesService";
import {FormProvider, useForm} from "react-hook-form";
import {addDeleteMovieSchema} from "./validation";
import {yupResolver} from '@hookform/resolvers/yup';
import {ModalButton} from "../../Components/Common/Buttons/ModalButton";
import {TextInput} from "../../Components/Common/Inputs/TextInput";
import {SelectInput} from "../../Components/Common/Inputs/SelectInput";

interface IAddEditMovieModal {
  setIsOpen: toggler;
  movie?: IMovie;
}

export type TForm = Pick<
  IMovie,
  'title'
  | 'release_date'
  | 'poster_path'
  | 'vote_average'
  | 'genres'
  | 'runtime'
  | 'overview'
>

export type TExportedMovie = TForm & Pick<IMovie, 'id'>

const getStyles = (theme: Theme) => ({
  formLine: {
    display: 'flex',
    marginTop: '24px'
  },
  formBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    m: 2
  },
  leftForm: {
    flex: 5
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export const AddEditMovieModal: React.FC<IAddEditMovieModal> = ({setIsOpen, movie}) => {
  const defaultValues = {
    title: movie?.title || '',
    release_date: movie?.release_date || '',
    poster_path: movie?.poster_path || '',
    vote_average: movie?.vote_average || 0,
    genres: movie?.genres || [mockGenres[0]],
    runtime: movie?.runtime || 0,
    overview: movie?.overview || ''
  };

  const sx = getStyles(useTheme());
  const {input} = getCommonStyles(useTheme());
  const [createMovie] = useCreateMovieMutation();
  const [updateMovie] = useUpdateMovieMutation();
  const form = useForm({
    defaultValues,
    resolver: yupResolver(addDeleteMovieSchema),
  });

  const submitForm = (form: TForm) => {
    console.log('abobMovie', movie, form)
    const movieToUpdate = {...movie, ...form, id: movie?.id ? Number(movie.id) : Date.now()};
    movie ? updateMovie(movieToUpdate) : createMovie(movieToUpdate);
    setIsOpen(false);
  };

  return (
    <Modal setOpen={setIsOpen} title={`${movie ? 'Edit' : 'Add'} movie`}>
      <FormProvider {...form}>
        <Stack>
          <Stack direction="row">
            <Box sx={{...sx.formBlockContainer, ...sx.leftForm}}>
              <LabeledForm formLabel="Title">
                <TextInput sx={{input: input}} name="title"/>
              </LabeledForm>
            </Box>
            <Box sx={sx.formBlockContainer}>
              <LabeledForm formLabel="Release Date">
                <TextInput sx={{input: input}} type="date" name="release_date"/>
              </LabeledForm>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box sx={{...sx.formBlockContainer, ...sx.leftForm}}>
              <LabeledForm formLabel="Movie URL">
                <TextInput sx={{input: input}} placeholder="https://" name="poster_path"/>
              </LabeledForm>
            </Box>
            <Box sx={sx.formBlockContainer}>
              <LabeledForm formLabel="Release Date">
                <TextInput sx={{input: input}} placeholder="7.9" name="vote_average"/>
              </LabeledForm>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box sx={{...sx.formBlockContainer, ...sx.leftForm}}>
              <LabeledForm formLabel="Genre">
                <SelectInput
                  sx={input}
                  name="genres"
                  multiple
                  placeholder="Select Genres"
                  options={mockGenres}
                />
              </LabeledForm>
            </Box>
            <Box sx={sx.formBlockContainer}>
              <LabeledForm formLabel="Runtime">
                <TextInput sx={{input: input}} type="number" placeholder="minutes " name="runtime"/>
              </LabeledForm>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box sx={sx.formBlockContainer}>
              <LabeledForm formLabel="Overview">
                <TextInput
                  placeholder="Movie description"
                  minRows={4}
                  multiline
                  inputProps={{style: input}}
                  name="overview"/>
              </LabeledForm>
            </Box>
          </Stack>
        </Stack>
      </FormProvider>
      <Box sx={sx.buttonsContainer}>
        <ModalButton onClick={form.reset} isReset/>
        <ModalButton onClick={form.handleSubmit(submitForm)}/>
      </Box>
    </Modal>
  );
};