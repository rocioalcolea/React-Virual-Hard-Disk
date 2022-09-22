import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import RaizPage from "./pages/RaizPage";
import HomePage from "./pages/HomePage";
import ValidarPage from "./pages/ValidarPage";
import ConfirmacionPage from "./pages/ConfirmacionPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RaizPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/confirmacion" element={<ConfirmacionPage />} />
        <Route
          path="/usuarios/validar/:registrationCode"
          element={<ValidarPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
