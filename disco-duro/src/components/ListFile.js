import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import FolderCard from "./FolderCard";
import { Icon, Table } from "semantic-ui-react";
const ListFile = () => {
  const [lista, setLista] = useState([]);
  const [message, setMessage] = useState();
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
      setMessage(resData.message);
    };

    listarFunction();
  }, [lista, token, user.id]);

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            Listado de Archivos y Carpetas
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {lista[0] &&
          lista[0].map((carpetas) => <FolderCard carpeta={carpetas} />)}
      </Table.Body>
    </Table>
  );
};

export default ListFile;
