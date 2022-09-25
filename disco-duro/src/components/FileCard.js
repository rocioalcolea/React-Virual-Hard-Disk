import { Icon, Table } from "semantic-ui-react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { deleteFileService, downloadFileService } from "../services";
import { Link } from "react-router-dom";
export default function FileCard({ archivo }) {
  const { token } = useContext(AuthContext);
  const id = archivo.id_archivo;

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name="file" /> {archivo.name_real}{" "}
      </Table.Cell>
      <Table.Cell>
        <Icon
          name="download"
          onClick={() => downloadFileService({ id, token })}
        />
      </Table.Cell>
      <Table.Cell>
        <Icon name="trash" onClick={() => deleteFileService({ id, token })} />
      </Table.Cell>
    </Table.Row>
  );
}
