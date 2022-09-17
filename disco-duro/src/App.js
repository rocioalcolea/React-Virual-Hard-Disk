import "./App.css";

import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function App() {
  const [infoUsuario, setInfoUsuario] = useState({ nombre: "juan" });

  return (
    <div className="App">
      <Header infoUsuario={infoUsuario} setInfoUsuario={setInfoUsuario} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
