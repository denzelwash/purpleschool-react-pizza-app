import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./components/App/App.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
