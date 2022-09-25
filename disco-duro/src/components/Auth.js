import { AuthContext } from "../context/AuthContext";
import Modals from "./Modals";
import { useContext } from "react";
import { Button } from "semantic-ui-react";
import hipster from "../img/hombre.png";

export default function Auth({ infoUsuario, setInfoUsuario }) {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <div className="bienvenido">
      <div>
        <img src={hipster} alt="hipster" />
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
