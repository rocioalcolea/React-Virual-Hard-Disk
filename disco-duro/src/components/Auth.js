import { AuthContext } from "../context/AuthContext";
import Modals from "./Modals";
import { useContext } from "react";
import { Button } from "semantic-ui-react";

export default function Auth({ infoUsuario, setInfoUsuario }) {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <p>
      Bienvenid@ <span>{user.nombre}</span>
      <Button onClick={() => logout()}>Salir</Button>
    </p>
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
