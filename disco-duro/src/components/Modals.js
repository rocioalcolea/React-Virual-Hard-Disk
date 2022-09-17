import React from "react";
import { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import Login from "./Login";
import Registro from "./Registro";

export default function Modals({ label, infoUsuario, setInfoUsuario }) {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button animated>
          <Button.Content visible>{label}</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header>{label}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          {label === "Registrate" ? (
            <Registro
              infoUsuario={infoUsuario}
              setInfoUsuario={setInfoUsuario}
              setOpen={setOpen}
            />
          ) : (
            <Login
              infoUsuario={infoUsuario}
              setInfoUsuario={setInfoUsuario}
              setOpen={setOpen}
            />
          )}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
}
