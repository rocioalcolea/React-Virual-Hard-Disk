import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ValidarPage = () => {
  const { registrationCode } = useParams();
  const [message, setMessage] = useState();

  useEffect(() => {
    const validateFunction = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/usuarios/validar`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ registrationCode }),
        }
      );

      const resData = await res.json();
      console.log("resData ", resData);
      setMessage(resData.message);
    };

    validateFunction();
  }, [registrationCode]);

  return <section>{message && <p>{message}</p>}</section>;
};

export default ValidarPage;
