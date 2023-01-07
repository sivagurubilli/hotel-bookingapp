import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const navigate = useNavigate()
  const [destination, setDestination] = useState("");
  const { data, loading, error } = useFetch(
    "https://gurubooking.herokuapp.com/api/hotels/countByCity?cities=Mumbai,Hyderabad,Chennai"
  );

  const handlch=(e)=>{
   
    setDestination("Mumbai")
   // navigate("/hotels",{ state: { destination}});
  }
 
  return (

    
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem" value="Mumbai" id="Mumbai" onClick={handlch} >
            <img
            src="https://images.unsplash.com/photo-1594146032116-80033545b0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11bWJhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={handlch}>
            <img
 src="https://images.unsplash.com/photo-1601619933635-023753974a65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHlkZXJhYmFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
               alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem"  onClick={handlch}>
            <img
  src="https://media.istockphoto.com/photos/tokyo-night-picture-id520285776?k=20&m=520285776&s=612x612&w=0&h=dhcdw9Wkjmsz9GjttFnL2zL1o-wIYP67pqmAU3nJu8s="              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chennai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
