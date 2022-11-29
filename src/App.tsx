import React from "react";
import {Header, Footer} from "./Components";
import {MovieListView} from "./Views/MovieListView/MovieListView";

const App: React.FC = () => (
  <React.Fragment>
    <Header />
    <MovieListView />
    <Footer />
  </React.Fragment>
)

export default App