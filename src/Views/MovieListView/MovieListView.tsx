import React from "react";
import {MainContent, MovieList} from "../../Components";
import {GenresAndSorting} from "../../Components/MovieList/GenresAndSorting";

export const MovieListView: React.FC = () => {
  return (
    <MainContent>
      <GenresAndSorting />
      <MovieList />
    </MainContent>
  )
}