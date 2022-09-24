import { useContext } from "react";
import ListFile from "../components/ListFile";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { user, token } = useContext(AuthContext);

  return (
    <>
      {user && token && (
        <div className="Lista">
          <div>Componente uno, subir archivo</div>
          <div>Componente dos, crear carpeta</div>
          <ListFile />
        </div>
      )}
    </>
  );
}
