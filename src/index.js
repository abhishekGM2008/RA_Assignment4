import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import Books from "./pages/Books";
import AddNewBooks from "./pages/AddNewBooks";
import { BooksProvider } from "./contexts/BookContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BooksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addNew" element={<AddNewBooks />} />
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  </StrictMode>
);
