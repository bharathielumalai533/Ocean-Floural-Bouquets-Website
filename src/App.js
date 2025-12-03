// src/App.jsx (or App.js)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
//import AllProducts from "./Pages/AllProducts"
//import MixedBlooms from "./Pages/MixedBlooms"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page with your sidebar layout */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
