import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Asigură-te că ai un fișier CSS pentru stiluri globale
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Importă CSS-ul Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
