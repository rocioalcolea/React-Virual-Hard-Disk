import { AuthContext } from "../context/AuthContext";
import Modals from "./Modals";
import { useContext } from "react";
export default function Auth({ infoUsuario, setInfoUsuario }) {
  const { token } = useContext(AuthContext);
  return (
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
      <div>{token}</div>
    </nav>
  );
}
