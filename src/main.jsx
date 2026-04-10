import React from "react";
// React base

import ReactDOM from "react-dom/client";
// Permite renderizar la app

import App from "./ui/pages/App";
// Se importa el componente principal

import "./index.css"; 
// Se importan los estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* StrictMode ayuda a detectar errores */}
    <App />
  </React.StrictMode>
);