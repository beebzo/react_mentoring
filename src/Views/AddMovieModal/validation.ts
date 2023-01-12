import * as yup from "yup";

export const addDeleteMovieSchema = yup.object({
  title: yup.string().required(),
  release_date: yup.date().required(),
  poster_path: yup.string().required().url(),
  vote_average: yup.number().min(1).max(10),
  genres: yup.array(),
  runtime: yup.number().min(1).max(1000),
  overview: yup.string()
});