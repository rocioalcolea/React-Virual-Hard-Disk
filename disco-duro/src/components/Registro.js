import { Button, Divider, Form, Label } from "semantic-ui-react";
import { useState } from "react";
import { registerUserService } from "../services";

export default function Registro({ setOpen }) {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUserService({ name: nombre, email, password });
    } catch (error) {
      setError(error.message);
    }

    setOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <input
          type="text"
          placeholder="Nombre"
          required
          onChange={(e) => setNombre(e.target.value)}
        />
        <Label pointing>Introduce tu nombre de usuario</Label>
      </Form.Field>
      <Divider />

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
      <Form.Field inline>
        <Label pointing="right">Repite tu contraseña</Label>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword2(e.target.value)}
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
        {error ? <p>{error}</p> : null}
      </Form.Field>
    </Form>
  );
}
