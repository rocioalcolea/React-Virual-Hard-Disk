import { useContext } from "react";
import ListFile from "../components/ListFile";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { user, token } = useContext(AuthContext);

  return (
    <>
      {user && token && (
        <div className="Lista">
          <ListFile />
        </div>
      )}
    </>
  );
}
