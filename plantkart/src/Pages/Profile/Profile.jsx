import { useContext } from "react";

import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setToken("");
    navigate("/", { replace: true });
  };
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-container-first">
        <p>Full Name :{user?.firstName + " " + user?.lastName} </p>
        <p>Email : {user?.email}</p>
      </div>
      <div className="profile-container-second">
        <button>My Address</button>
        <button onClick={logoutHandler}>LogOut</button>
      </div>
    </div>
  );
};
