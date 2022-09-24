import { Icon, Table } from "semantic-ui-react";
import { deleteFolderService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export default function FolderCard({ carpeta }) {
  const id = carpeta.id_directorio;
  const { token } = useContext(AuthContext);

  return (
    <Table.Row>
      <Table.Cell colSpan="2">
        <Icon name="folder" /> {carpeta.name}
      </Table.Cell>
      <Table.Cell>
        <Icon name="trash" onClick={() => deleteFolderService({ id, token })} />
      </Table.Cell>
    </Table.Row>
  );
}
