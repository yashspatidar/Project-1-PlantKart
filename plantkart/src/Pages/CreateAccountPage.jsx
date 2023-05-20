import { Link } from "react-router-dom";
import "../Login.css"

export const CreateAccountPage = () => {
  return (
    <div className="login">
      <div className="first_login">
        <h1>PlantKart</h1>
        <p>Welcome Please Provide Your Details</p>
      </div>
      <div className="second_login">
      <input placeholder="Full Name" className="login_input"/>
        <input placeholder="Email" className="login_input"/>
        <input placeholder="Password" className="login_input"/>
      </div>
      <div >
        <button className="login_button">SIGN UP</button>
      </div>
      <div >
        <button className="login_button">LOGIN IN</button>
      </div>
    </div>
  );
};
