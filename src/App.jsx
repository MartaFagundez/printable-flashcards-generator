import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Editor from "./pages/Editor";

export default function App() {
  
  return (
    <>
      <BrowserRouter basename="/printable-flashcards-generator">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
