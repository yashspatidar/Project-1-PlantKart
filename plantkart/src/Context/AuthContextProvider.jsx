import { createContext, useState } from "react";
import { loginService } from "../Services/loginServices";
import { signUpService } from "../Services/signUpServices";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const localStorageToken = JSON.parse(localStorage.getItem("login"));
    const [token, setToken] = useState(localStorageToken?.token );
//   const localStorageToken = JSON.parse(localStorage.getItem("login"));
//   const [token, setToken] = useState(localStorageToken?.token || "");
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);
        if (status === 200) {
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
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(email, password, firstName, lastName);
      if(status ===201){
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
      }

    } catch (e) {
      console.error(e, "auth error 2");
    }
  };

  return (
    <AuthContext.Provider value={{ signUpUser,token,setToken,user,setUser,loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
