import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css"
const Register = () => {
    
  const [credentials, setCredentials] = useState({
    username: "",
    email:"",
   city:"",
    country:"",
  phone:"",
    password: "",
    isAdmin:false
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
   console.log(e.target.checked)
    const {type} = e.target;
    if(type==="checkbox"){
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.checked }))
       
    }else{
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleClick = async (e) => {

    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://gurubooking.herokuapp.com/api/auth/register", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/login")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="country"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        
        <input
        type="city"
        placeholder="city"
        id="city"
        onChange={handleChange}
        className="lInput"
      />
        <input
          type="phone"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
       
  
        <button disabled={loading} onClick={handleClick} className="lButton">
          register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register
