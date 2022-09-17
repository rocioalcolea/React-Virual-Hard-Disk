import Modals from "../Components/Modals";
import logo from "../img/logoColmena.png";

export default function Header({ infoUsuario, setInfoUsuario }) {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" />

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
        <div className="modales">
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
        </div>
      )}
    </header>
  );
}
