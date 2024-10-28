import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./components/App/App.tsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
);
