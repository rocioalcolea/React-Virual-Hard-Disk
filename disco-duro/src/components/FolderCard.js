import { Icon, Table } from "semantic-ui-react";
export default function FolderCard({ carpeta }) {
  return (
    <Table.Row>
      <Table.Cell colSpan="2">
        <Icon name="folder" /> {carpeta.name}
      </Table.Cell>
      <Table.Cell>
        <Icon name="trash" />
      </Table.Cell>
    </Table.Row>
  );
}
