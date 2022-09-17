import { Divider, Form, Label, Button } from "semantic-ui-react";
import useSendData from "../hooks/useSendData";
import { useState } from "react";

export default function Login({ setUser, setOpen }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [status, data, sendData] = useSendData(
    "http://localhost:4000/usuarios/login"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendData({ email, password });
    console.log(password, email);

    setOpen(false);
  };

  if (status === "loading") {
    return (
      <div id="login" className="loading">
        Cargando...
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
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
