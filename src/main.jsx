import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MovieProvider } from "./Contexts/MovieContext.jsx";

import App from "./App.jsx";
import "./styles/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
