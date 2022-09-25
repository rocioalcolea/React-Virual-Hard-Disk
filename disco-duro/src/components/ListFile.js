import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import FolderCard from "./FolderCard";
import FileCard from "./FileCard";
import { Table } from "semantic-ui-react";
import { listarFunctionService } from "../services";

//import { listarFunctionService } from "../services";

const ListFile = () => {
  const [lista, setLista] = useState([]);

  const { user, token } = useContext(AuthContext);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setKey((k) => k + 1), 10000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    listarFunctionService(lista, setLista, token, user.id);
    /*   const listarFunction = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/folder/listar/${user.id}`,
        {
          headers: { Authorization: token },
        }
      );

      const resData = await res.json();

      setLista(resData.data);
    };
    listarFunction(); */
  }, [key, token, user.id]);
  const reload = () => setKey((k) => k + 1);

  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            Listado de Archivos y Carpetas
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {lista[0] &&
          lista[0].map((carpeta) => (
            <FolderCard
              carpeta={carpeta}
              id_directorio={carpeta.id_directorio}
              key={carpeta.id_directorio}
            />
          ))}
        {lista[1] &&
          lista[1].map((archivo) => (
            <FileCard archivo={archivo} key={archivo.id_archivo} />
          ))}
      </Table.Body>
    </Table>
  );
};

export default ListFile;
