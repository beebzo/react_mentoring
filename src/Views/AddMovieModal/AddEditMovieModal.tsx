import React, {useEffect, useRef, useState} from "react";
import {Modal, LabeledForm} from "../../Components/Common";
import {FormGroup, MenuItem, Select, TextField, TextFieldProps, Theme, useTheme} from "@mui/material";
import {toggler} from "../../consts/types/toggler";
import {IMovie} from "../../consts/types/movie";
import {mockGenres} from "../../consts/mock/mockedData";
import {getCommonStyles} from "../../Components/Common/Styles/Styles";
import {useCreateMovieMutation, useUpdateMovieMutation} from "../../services/movies/moviesService";

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
});

export const AddEditMovieModal: React.FC<IAddEditMovieModal> = ({setIsOpen, movie}) => {
  const sx = getStyles(useTheme());
  const {input} = getCommonStyles(useTheme());
  const [createMovie] = useCreateMovieMutation();
  const [updateMovie] = useUpdateMovieMutation();
  let initialState = useRef<TForm>(null);
  const [formData, setFormData] = useState<TForm>({
    title: movie?.title || '',
    release_date: movie?.release_date || '',
    poster_path: movie?.poster_path || '',
    vote_average: movie?.vote_average || 0,
    genres: movie?.genres || [],
    runtime: movie?.runtime || 0,
    overview: movie?.overview || ''
  });

  useEffect(() => {
    initialState.current = formData;
  }, []);

  const movieToUpdate = {...formData, id: movie?.id ? Number(movie.id) : Date.now()}
  const sendMovie = () => {
    movie ? updateMovie(movieToUpdate) : createMovie(formData)
    setIsOpen(false)
  }

  const buttons = [
    {
      label: 'Reset',
      onClick: () => setFormData(initialState.current)
    },
    {
      label: 'Submit',
      onClick: sendMovie
    }
  ];
  const handleChange = (e) => {
    let {name, value} = e.target;
    if (!isNaN(Number(value))) value = Number(value);
    setFormData({...formData, [name]: value});
  };
  const renderTextField = (props: TextFieldProps & { name: keyof TForm }) => (
    <TextField
      inputProps={{sx: input}}
      onChange={handleChange}
      value={formData[props.name]}
      {...props}
    />
  );

  return (
    <Modal setOpen={setIsOpen} title={`${movie ? 'Edit' : 'Add'} movie`} buttons={buttons}>
      <FormGroup sx={sx.formLine} row>
        <LabeledForm formLabel="Title" isNotLast>
          {renderTextField({name: 'title'})}
        </LabeledForm>
        <LabeledForm formLabel="Release Date">
          {renderTextField({type: 'date', name: 'release_date'})}
        </LabeledForm>
      </FormGroup>
      <FormGroup sx={sx.formLine} row>
        <LabeledForm formLabel="Movie URL" isNotLast>
          {renderTextField({placeholder: "https://", name: 'poster_path'})}
        </LabeledForm>
        <LabeledForm formLabel="Rating">
          {renderTextField({placeholder: "7.8", name: 'vote_average'})}
        </LabeledForm>
      </FormGroup>
      <FormGroup sx={sx.formLine} row>
        <LabeledForm formLabel="Genre" isNotLast>
          <Select
            value={formData.genres}
            name="genres"
            onChange={handleChange}
            sx={input}
            multiple
          >
            {mockGenres.map(el => <MenuItem value={el} key={el}>{el}</MenuItem>)}
          </Select>
        </LabeledForm>
        <LabeledForm formLabel="Runtime">
          {renderTextField({placeholder: "minutes", name: 'runtime', type: 'number'})}
        </LabeledForm>
      </FormGroup>
      <FormGroup sx={sx.formLine}>
        <LabeledForm formLabel="Overview">
          {
            renderTextField({
              placeholder: "Movie description",
              minRows: 4,
              name: 'overview',
              multiline: true
            })}
        </LabeledForm>
      </FormGroup>
    </Modal>
  );
};