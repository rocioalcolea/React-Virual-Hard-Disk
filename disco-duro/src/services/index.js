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

export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`, {
    headers: { Authorization: token },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

/* export const listarFunctionService = async (lista, setLista, token, id) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND}/folder/listar/${id}`,
    {
      headers: { Authorization: token },
    }
  );

  const resData = await res.json();

  setLista(resData.data);
  return lista;
}; */

export const deleteFileService = async ({ id, token }) => {
  await fetch(`${process.env.REACT_APP_BACKEND}/file/eliminar/${id}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });
};

export const deleteFolderService = async ({ id, token }) => {
  await fetch(`${process.env.REACT_APP_BACKEND}/folder/eliminar/${id}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });
};

export const newFolderService = async ({ token, nombreCarpeta }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/folder/crearCarpeta`,
    {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({ nombreCarpeta }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const downloadFileService = async ({ id, token, name }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/file/${id}`, {
    method: "GET",
    headers: { Authorization: token },
  });
  const body = await response.blob();
  const fileUrl = URL.createObjectURL(body);
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = name;
  link.click();
};

export const sendFileService = async ({ token, data, id }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/file/subirArchivo/${id}`,
    {
      method: "POST",
      headers: { Authorization: token },
      body: data,
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
