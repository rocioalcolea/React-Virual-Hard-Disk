import { Button, Divider, Form, Label } from "semantic-ui-react";
import { useState } from "react";
export default function Registro({ infoUsuario, setInfoUsuario, setOpen }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    console.log("antes", infoUsuario);
    setInfoUsuario({ name: nombre, mail: email, pass: password });
    console.log("despues", infoUsuario);
    setOpen(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <Label pointing>Introduce tu nombre de usuario</Label>
      </Form.Field>
      <Divider />

      <Form.Field inline>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label pointing="left">Introduce tu email</Label>
      </Form.Field>
      <Divider />

      <Form.Field inline>
        <Label pointing="right">
          Tu contraseña debe tener más de 6 caracteres y menos de 20
        </Label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Field>
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
  );
}
