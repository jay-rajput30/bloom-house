import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import ProductProvider from "./context/ProductProvider";
import FilterProvider from "./context/FilterProvider";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
