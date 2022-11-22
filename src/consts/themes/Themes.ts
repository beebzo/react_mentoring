import {createTheme} from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#F65261',
      light: '#FFF',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      paper: '#232323',
      default: '#555',
    }
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightBold: 900,
    fontWeightLight: 300,
    fontWeightMedium: 700,
    fontWeightRegular: 500
  }
})

export default mainTheme