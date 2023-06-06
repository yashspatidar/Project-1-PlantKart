import { useContext } from "react";
import "./profile.css"
import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router";
import {  toast } from "react-toastify";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setToken("");
    navigate("/", { replace: true });
    toast.success("Successfully Logged Out",{ autoClose: 500 });
    setTimeout(()=>{
      window.location.reload();
    },550)
    
  };
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-container-first">
        <p>Full Name :{user?.firstName + " " + user?.lastName} </p>
        <p>Email : {user?.email}</p>
      </div>
      <div className="profile-container-second">
        <button onClick={()=>navigate("/address")} className="productButtons">My Address</button>
        <button onClick={logoutHandler} className="productButtons">LogOut</button>
      </div>
    </div>
  );
};
