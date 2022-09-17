import Modals from "./Modals";
export default function Auth({ infoUsuario, setInfoUsuario }) {
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
    </nav>
  );
}
