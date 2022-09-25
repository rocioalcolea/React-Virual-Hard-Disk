import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import FolderCard from "./FolderCard";
import FileCard from "./FileCard";
import { Table } from "semantic-ui-react";
import { useParams, Link } from "react-router-dom";
import UploadFileModalInFolder from "./UploadFileModalInFolder";

const ListFolder = () => {
  const { id_directorio } = useParams();
  const [lista, setLista] = useState([]);

  const { token } = useContext(AuthContext);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setKey((k) => k + 1), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const listarFunction = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/folder/listar/${id_directorio}`,
        {
          headers: { Authorization: token },
        }
      );

      const resData = await res.json();

      setLista(resData.data);
    };
    listarFunction();
  }, [key, token, id_directorio]);

  //const reload = () => setKey((k) => k + 1);

  return (
    <>
      <UploadFileModalInFolder id_directorio={id_directorio} />

      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              Listado de Archivos y Carpetas. Carpeta{id_directorio}
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
      <Link to="/home">Volver</Link>
    </>
  );
};

export default ListFolder;
