import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <title>Bikku BS Portfolio</title>
    <meta name="description" content="Welcome to my portfolio website" />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
