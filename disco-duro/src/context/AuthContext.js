import { createContext, useEffect } from "react";
import { useState } from "react";
import { getMyUserDataService } from "../services";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService({ token });
        setUser(data);
      } catch (error) {
        logout();
      }
    };
    if (token) {
      getUserData();
    }
  }, [token]);
  const login = (token) => {
    setToken(token);
  };
  const logout = () => {
    setToken("");
    setUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
