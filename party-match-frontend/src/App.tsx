import React from "react";
import "./styles/App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";

function App() {
  return (
    <HashRouter>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<></>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
