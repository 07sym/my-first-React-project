import React from "react";
import "./styles.css";
import {Link} from "react-router-dom"

function Head() {
  return (
    <div>
      <div className="head">
        <p>More to Rack,easier and faster.</p>
      </div>
      <div className="btn">
        <Link to="/login"><button className="btn">Sign In or Create an Account</button></Link>
      </div>

      <div className="deals">
        <img src="https://n.nordstrommedia.com/it/97cfab2b-dd14-45b0-be42-6631e41d9039.png?h=200&w=1608" />
      </div>
    </div>
  );
}
export default Head;
