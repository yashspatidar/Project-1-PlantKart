import { createContext, useState } from "react";
import { loginService } from "../Services/loginServices";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  // console.log(localStorageToken,"token");
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);
        if (status === 200 || status === 201) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
        }
      } catch (e) {
        console.error(e, "auth error");
      }
    }
  };

  const signUpUser = async (firstName, lastName, email, password) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      if (status === 201 || status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: encodedToken,
            // user: createdUser,
          })
        );
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setUser(createdUser);
        setUser(createdUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signUpUser, token, setToken, user, setUser, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
