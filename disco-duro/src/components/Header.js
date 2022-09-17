import Auth from "./Auth";
import logo from "../img/logoColmena.png";
import { Link } from "react-router-dom";

export default function Header({ infoUsuario, setInfoUsuario }) {
  return (
    <header className="App-header">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      <p>Maicloud: La nube más hipster</p>

      {infoUsuario.data ? (
        <div className="bienvenida">
          <span className="saludo">
            <p>Bienvenido {infoUsuario.email}</p>
          </span>
          <span className="salir">
            <p>Salir</p>
          </span>
          <span className="datos">
            <p>Mis datos</p>
          </span>
        </div>
      ) : (
        <Auth infoUsuario={infoUsuario} setInfoUsuario={setInfoUsuario} />
      )}
    </header>
  );
}
