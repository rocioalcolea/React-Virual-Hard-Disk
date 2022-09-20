import Auth from "./Auth";
import logo from "../img/logoColmena.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <p>Maicloud: La nube más hipster</p>
      <Auth />
    </header>
  );
}
