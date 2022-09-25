import { AuthContext } from "../context/AuthContext";
import Modals from "./Modals";
import { useContext } from "react";
import { Button } from "semantic-ui-react";
import hipster from "../img/hombre.png";
import { Link } from "react-router-dom";

export default function Auth({ infoUsuario, setInfoUsuario }) {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <div className="bienvenido">
      <div className="logoHipster">
        <img src={hipster} alt="hipster" /> <Link to="/home">My Home</Link>
      </div>
      <div>
        <p>Mis Datos</p>
        <h4>
          {user.nombre}
          <br />
          {user.mail}
        </h4>

        <Button onClick={() => logout()}>Salir</Button>
      </div>
    </div>
  ) : (
    <nav className="modales">
      <Modals
        label="Registrate"
        infoUsuario={infoUsuario}
        setInfoUsuario={setInfoUsuario}
      />
      <Modals
        label="Login"
        infoUsuario={infoUsuario}
        setInfoUsuario={setInfoUsuario}
      />
    </nav>
  );
}
