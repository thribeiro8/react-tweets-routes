import React from "react";
import ReactDOM from "react-dom/client";
import AppRouters from "./AppRouters";
import AppTweets from "./AppTweets";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouters />
    <AppTweets />
  </React.StrictMode>
);
