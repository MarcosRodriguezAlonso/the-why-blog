import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./router/router";
import PostsContextProvider from "./Context/PostsContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostsContextProvider>
      <RouterProvider router={mainRouter} />
    </PostsContextProvider>
  </React.StrictMode>,
);
