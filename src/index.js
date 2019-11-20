import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./style.jsx";
import { PrintPage } from "./print";

function App() {
  return (
    <>
      <PrintPage />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
