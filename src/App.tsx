import React from "react";
import ReactDOM from "react-dom/client";
import MainContainer from "./components/MainContainer/MainContainer";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
);
