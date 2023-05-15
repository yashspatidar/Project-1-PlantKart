import { Link } from "react-router-dom";
import "../Login.css"

export const Login = () => {
  return (
    <div className="login">
      <div className="first_login">
        <h1>PlantKart</h1>
        <p>Welcome back! Sign in with</p>
      </div>
      <div className="second_login">
        <input placeholder="Email" className="login_input"/>
        <input placeholder="Password" className="login_input"/>
      </div>
      <div >
        <button className="login_button">SIGN IN</button>
      </div>
      <div className="third_login">
        <p>New here? <Link className="third_login_link">Create an Account</Link></p>
      </div>
    </div>
  );
};
