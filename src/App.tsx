import React from "react";
import {Header, Footer} from "./Components";
import {MovieListView} from "./Views/MovieListView/MovieListView";

const App: React.FC = () => (
  <div>
    <Header />
    <MovieListView />
    <Footer />
  </div>

)

export default App