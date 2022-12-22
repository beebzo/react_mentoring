import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import {CssBaseline, ThemeProvider} from "@mui/material";
import mainTheme from "./consts/themes/Themes";
import {ErrorBoundary} from "./Components";
import {Provider} from "react-redux";
import {store} from "./store";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <App tab="home" />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>);