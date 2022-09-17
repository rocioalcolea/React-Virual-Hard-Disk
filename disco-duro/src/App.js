import "./App.css";

import React from "react";
import { useState } from "react";
import dispositivos from "./img/dispositivos.png";
import Header from "./Components/Header";

function App() {
  const [infoUsuario, setInfoUsuario] = useState({ nombre: "juan" });

  return (
    <div className="App">
      <Header infoUsuario={infoUsuario} setInfoUsuario={setInfoUsuario} />
      <main className="App-main">
        <img src={dispositivos} alt="fondo" />
        <div className="description">
          <h1>Disco Duro Virtual</h1>
          <p>
            Nuestro sistema de almacenamiento de ficheros en la nube accesible
            via web es seguro y práctico
          </p>
          <p>
            Es un espacio gratuito y seguro para guardar tus documentos y
            liberar espacio en tu disco duro.
          </p>
          <p>
            Registrate y vive esta nueva experiencia de acceder a tus archivos
            donde y cuando quieras
          </p>
          <h3>Estás a un clic de la nube</h3>
        </div>
      </main>
      <footer
        className="App-footer 
      "
      >
        <h3>Maikel y Rocio</h3>
      </footer>
    </div>
  );
}

export default App;
