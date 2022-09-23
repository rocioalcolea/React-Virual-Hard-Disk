import { Icon, Table } from "semantic-ui-react";
export default function FolderCard({ carpeta }) {
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name="folder" /> {carpeta.name}
      </Table.Cell>
      <Table.Cell>Borrar</Table.Cell>
      <Table.Cell collapsing textAlign="right">
        Otra cosa
      </Table.Cell>
    </Table.Row>
  );
}
