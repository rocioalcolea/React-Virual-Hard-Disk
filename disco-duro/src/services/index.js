export const loadListarService = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/folder/listar/`
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/usuarios/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
