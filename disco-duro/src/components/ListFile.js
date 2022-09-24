import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import FolderCard from "./FolderCard";
import FileCard from "./FileCard";
import { Table } from "semantic-ui-react";

const ListFile = () => {
  const [lista, setLista] = useState([]);

  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const listarFunction = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/folder/listar/${user.id}`,
        {
          headers: { Authorization: token },
        }
      );

      const resData = await res.json();

      setLista(resData.data);
    };

    listarFunction();
  }, [lista, token, user.id]);

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
            <FolderCard carpeta={carpeta} key={carpeta.id_directorio} />
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
