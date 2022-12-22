import React, {createContext, useState} from "react";

export const SelectedMovieContext = createContext(null);

interface ISelectedMovieContextProvider {
  children: React.ReactNode;
}
export const SelectedMovieContextProvider: React.FC<ISelectedMovieContextProvider> = ({children}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <SelectedMovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
      {children}
    </SelectedMovieContext.Provider>
  )
}