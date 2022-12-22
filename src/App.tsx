import React from "react";
import {Header, Footer} from "./Components";
import {MovieListView} from "./Views/MovieListView/MovieListView";
import {SelectedMovieContextProvider} from "./Contexts/selectedMovieContextProvider";

const App: React.FC = () => (
  <React.Fragment>
    <SelectedMovieContextProvider>
      <Header />
      <MovieListView />
      <Footer />
    </SelectedMovieContextProvider>
  </React.Fragment>
)

export default App