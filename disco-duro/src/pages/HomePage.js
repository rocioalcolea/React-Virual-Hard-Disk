import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const [message, setMessage] = useState();

  const { user, token } = useContext(AuthContext);
  useEffect(() => {
    const listarFunction = async () => {
      console.log("token>>>", token);
      console.log("user<<<", user);
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/folder/listar/${user.id}`,
        {
          headers: { Authorization: token },
        }
      );

      const resData = await res.json();
      console.log("resData ", resData.data[0][0].name);
      setMessage(resData.message);
    };

    listarFunction();
  }, [token, user]);

  return <section>{message && <p>{message}</p>}</section>;
}
