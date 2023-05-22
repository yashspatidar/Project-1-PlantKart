import { Link, useNavigate } from "react-router-dom";
import "../Login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";

export const CreateAccountPage = () => {
  const { signUpUser, token } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function userDataHandler(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  // console.log(userData);

  // const signUpHandler = async(event) => {
  //   event.preventDefault();
  //   console.log(userData);
  //   try{
  //     const response = await axios.post('/api/auth/signup',userData);
  //     console.log(response)
  //   }
  //    catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signUpHandler = async(event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(`/api/auth/signup`, userData);
  //     console.log(response)
  //     // saving the encodedToken in the localStorage
  //     localStorage.setItem("token", response.data.encodedToken);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signUpHandler = async (event) => {
  //   event.preventDefault();

  //   if (!userData) {
  //     return;
  //   }

  //   try {
  //     let response = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         // "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     const data = await response.json();
  //     // setToken(data?.encodedToken);

  //     if (data?.encodedToken) {
  //       localStorage.setItem("token", data?.encodedToken);

  //       // navigate(location?.state?.from.pathname || "/login", { replace: true });
  //     }

  //     console.log(data);
  //   } catch (error) {}
  // };

  const signUpHandler = () => {
    const { firstName, lastName, email, password } = userData;
    if (email && password && firstName && lastName !== "") {
      (async () => {
        signUpUser(email, password, firstName, lastName);
      })();
    }
  };

  if (token) {
    setTimeout(() => {
      navigate("/products");
    });
  }

  return (
    <form className="login" onSubmit={signUpHandler}>
      {/* <div className="login"> */}
      <div className="first_login">
        <h1>PlantKart</h1>
        <p>Welcome Please Provide Your Details</p>
      </div>
      <div className="second_login">
        <input
          placeholder="First Name"
          className="login_input"
          name="firstName"
          value={userData.firstName}
          onChange={userDataHandler}
        />
        <input
          placeholder="Last Name"
          className="login_input"
          name="lastName"
          value={userData.lastName}
          onChange={userDataHandler}
        />
        <input
          placeholder="Email"
          className="login_input"
          onChange={userDataHandler}
          name="email"
          type="email"
          value={userData.email}
        />
        <input
          placeholder="Password"
          className="login_input"
          onChange={userDataHandler}
          name="password"
          type="password"
          value={userData.password}
        />
      </div>
      <div>
        <button className="login_button" type="submit">
          SIGN UP
        </button>
      </div>
      <div>
        <button className="login_button" onClick={()=>navigate("/login")}>LOGIN IN</button>
      </div>
      {/* </div> */}
    </form>
  );
};
