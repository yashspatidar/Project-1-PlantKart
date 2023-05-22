import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";


export const LoginPage = () => {
  const { token, loginUser } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const location = useLocation();

  const loginHandler = () => {
    navigate("/");
   
  };

  useEffect(() => {
    (async () => {
      loginUser(loginData.email, loginData.password);
    })();
  }, [loginData.email, loginData.password]);


  if (token) {
    setTimeout(() => {
      navigate("/cart", { replace: true });
    }, 500);
  }
  
  const testLoginHandler = () => {
    setLoginData((prev) => ({
      ...prev,
      email: "yash@gmail.com",
      password: "yash@123",
    }));
  };

  const loginFieldHandler = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

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
        <button className="login_button" onClick={loginHandler}>
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
