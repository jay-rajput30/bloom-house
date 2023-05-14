import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import ProductProvider from "./context/ProductProvider";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
