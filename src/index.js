import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import { GlobalStyle } from "./core/GlobalStyle";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./core/theme";
import store from "./core/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
