import { useContext } from "react";
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
import { AuthContext } from "../context/AuthContext";
import { sendFileService } from "../services";

function UploadFileModal({ id_directorio }) {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const { token, user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = id_directorio;
    console.log(id);
    try {
      const data = new FormData(e.target);
      await sendFileService({ data, token, id });
    } catch (error) {
      setError(error.message);
    }

    setOpen(false);
  };
  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button animated>
          <Button.Content visible>Subir Archivo</Button.Content>
          <Button.Content hidden>
            <Icon name="upload" />
          </Button.Content>
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Subir Archivos al disco duro virtual" />
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field inline>
            <input
              type="file"
              id="fichero"
              name="fichero"
              required
              onChange={(e) => setFileName(e.target.value)}
            />
            <Label pointing="left">
              Añade el nuevo fichero que quieres subir a tu disco duro virtual
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
          {error && <p>{error}</p>}
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default UploadFileModal;
