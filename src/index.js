import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import {CssBaseline, ThemeProvider} from "@mui/material";
import mainTheme from "./consts/themes/Themes";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <App tab="home" />
    </ThemeProvider>
  </React.StrictMode>);