import { useState } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
  Divider,
  Label,
} from "semantic-ui-react";

function NewFolderModal() {
  const [open, setOpen] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {}

    setOpen(false);
  };
  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button animated>
          <Button.Content visible>Nueva Carpeta</Button.Content>
          <Button.Content hidden>
            <Icon name="folder" />
          </Button.Content>
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="folder"
        content="Crear una nueva carpeta en disco duro virtual"
      />
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field inline>
            <input
              type="text"
              placeholder="Nombre Nueva Carpeta"
              required
              onChange={(e) => setFolderName(e.target.value)}
            />
            <Label pointing="left">
              Introduce el nombre de la nueva carpeta
            </Label>
          </Form.Field>
          <Divider />

          <Form.Field>
            <Button color="black" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button
              content="Aceptar"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              positive
            />
          </Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewFolderModal;
