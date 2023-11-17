import React from "react";
import "./Newsletter.css"

function Newsletter(){
    return(
        <div className="newsletter">
          <h1>Get Exclusive offers on your Email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div>
            <input type="email" placeholder="Email Address"/>
            <button>Sign Up</button>
          </div>
        </div>
    )
}
export default Newsletter