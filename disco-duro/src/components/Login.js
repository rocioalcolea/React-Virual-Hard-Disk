import { Divider, Form, Label, Button } from "semantic-ui-react";
import { useState } from "react";
import { loginUserService } from "../services";

export default function Login({ infoUsuario, setInfoUsuario, setOpen }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUserService({ email, password });
    } catch (error) {
      setError(error.message);
    }
    setInfoUsuario({ email: email, password: password });
    setOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field inline>
        <input
          type="email"
          placeholder="Email"
          required
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
          required
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
        {error ? { error } : null}
      </Form.Field>
    </Form>
  );
}
