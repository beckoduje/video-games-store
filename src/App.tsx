import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Latest from "./pages/Latest";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/rockets" element={<Welcome />} /> 
        <Route path="/about" element={<About />} > */}
        <Route path="/" element={<Navigate replace to="/latest" />} />
        <Route path="/latest" element={<Latest />} />
      </Routes>
    </div>
  );
}

export default App;
