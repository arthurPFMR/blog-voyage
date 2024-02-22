import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Copernic from "./pages/Copernic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
      <Route path="/1512" element={<Copernic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
