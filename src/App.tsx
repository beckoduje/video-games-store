import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/rockets" element={<Welcome />} /> 
        <Route path="/about" element={<About />} > */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
