import { Link, useLocation, useNavigate } from "react-router-dom";
import "./loginStyle.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { ProductContext } from "../../Context/ProductContextProvider";
import {  toast } from "react-toastify";

export const LoginPage = () => {
  const { token, loginUser } = useContext(AuthContext);
  const {loginData, setLoginData,dispatch} = useContext(ProductContext);
  const navigate = useNavigate();
  
  const location = useLocation();

  useEffect(() => {
    (async () => {
      loginUser(loginData.email, loginData.password);
    })();
  }, [loginData.email, loginData.password]);

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  // if (token) {
  //     navigate("/profile", { replace: true }); 
  // }
  
  const testLoginHandler = () => {
    setLoginData((prev) => ({
      ...prev,
      email: "yash@gmail.com",
      password: "yash@123",
    }));
    
  };

  const loginHandler = () => {
  if (loginData.email && loginData.password) {
    if(loginData.email !== "yash@gmail.com" && loginData.password !== "yash@123"){
      toast.warn("enter correct credential or signup",{ autoClose: 1000 });
    }
    setLoginData((prev) => ({
      ...prev,
      email: loginData.email,
      password: loginData.password,
    }));
  } else {
    toast.warn("login with correct data or signup",{ autoClose: 1000 });
  }
};

  


  const loginFieldHandler = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  
console.log(loginData)
  return (
    <div className="login">
      <div className="first_login">
        <h1>PlantKart</h1>
        <p>Welcome back! Sign in with</p>
      </div>
      <div className="second_login">
        <input
          placeholder="Email"
          className="login_input"
          type="email"
          value={loginData.email}
          name="email"
          onChange={loginFieldHandler}
          required
        />
        <input
          placeholder="Password"
          className="login_input"
          type="password"
          value={loginData.password}
          name="password"
          onChange={loginFieldHandler}
          required
        />
      </div>
      <div>
        <button className="login_button" onClick={loginHandler} >
          SIGN IN
        </button>
      </div>
      <div>
        <button className="login_button" onClick={testLoginHandler}>
          SIGN IN WITH TEST ACCOUNT
        </button>
      </div>
      <div className="third_login">
        <p>
          New here?{" "}
          <Link className="third_login_link" to="/createaccount">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};
