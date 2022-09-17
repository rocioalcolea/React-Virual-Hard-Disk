import { useState } from "react";

const useSendData = (url) => {
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState();
  let resData = "";
  const sendData = async (data, method = "POST") => {
    setStatus("loading...");
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      resData = await res.json();
    } catch (error) {
      console.log(error.message);
    }

    setResponse(resData);
    console.log(resData);

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return [status, response, sendData, resData];
};

export default useSendData;
