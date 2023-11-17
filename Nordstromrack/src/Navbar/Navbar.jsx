import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div>
           <div>
        <div className="nav1">
          <p>
            Now Through Nov.13 <span>Free Shipping</span> on most orders over
            $39.
            <a href="#">Learn More</a>
          </p>
        </div>
        <div className="nav2">
          <img
            className="logo"
            src="https://th.bing.com/th?id=OIP.OZ5xdhSERU1Jqucilnwg7QHaDd&w=335&h=156&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          />
          <div>
            <input
              placeholder="Search for products or brands"
              className="inp"
            />
            
          </div>
        
          <a className="signin" href="#">
          <Link to="/login"><span>Sign In</span></Link>
          </a>
          <Link to="/cart"><img
            className="cart"
            src="https://cdn1.iconfinder.com/data/icons/shopping-131/24/386-512.png"
            href="#"
          /></Link>
          
        </div>
      </div>
      <hr />
        </div>
    )
}
export default Navbar