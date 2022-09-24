import { Icon, Table } from "semantic-ui-react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function FileCard({ archivo }) {
  const { token } = useContext(AuthContext);
  //

  const handleClick = async (id) => {
    console.log("llega aqui");
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND}/file/eliminar/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );

    const resData = await res.json();
    console.log(resData);
  };

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name="file" /> {archivo.name_real}
      </Table.Cell>
      <Table.Cell>
        <Icon name="download" />
      </Table.Cell>
      <Table.Cell>
        <Icon name="trash" onClick={() => handleClick(archivo.id_archivo)} />
      </Table.Cell>
    </Table.Row>
  );
}
