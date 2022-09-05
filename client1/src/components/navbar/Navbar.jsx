import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const { loading, error, dispatch } = useContext(AuthContext);
const navigate = useNavigate()

  const handlelog=()=>{
    navigate("/login")
  }

  const handlereg=()=>{
    navigate("/register")
  }

const logout=()=>{
 
  
  dispatch({type:"LOGOUT"})
}

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Guru booking</span>
        </Link>
        <a href="https://gurubooking-admin.netlify.app/login" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Guru-booking-admin</span>
        </a>
        {user ? <h3 onClick={()=>logout()}>{user.username }</h3>: (
          <div className="navItems">
            <button className="navButton" onClick={()=>handlereg()}>Register</button>
            <button className="navButton" onClick={()=>handlelog()}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
