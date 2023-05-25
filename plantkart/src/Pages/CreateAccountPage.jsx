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
    setUserData((prev) => ({ ...prev, [name]: value }));
  }


  const signUpHandler = (event) => {
    event.preventDefault();
    signUpUser(
      userData.fullName,
      userData.lastName,
      userData.email,
      userData.password
    );
  };

  
  if (token) {
    setTimeout(() => {
      navigate("/products");
    }, 300);
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
        <button className="login_button" onClick={() => navigate("/login")}>
          LOGIN IN
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};
