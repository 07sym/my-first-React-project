import React, { useState } from "react";
import "./styles.css";
import {Link} from "react-router-dom"

function Menu() {
  const[menu,setMenu]=useState("Holiday Deals")
  return (
    <div>
      <ul className="menu">
        <li>
          <Link style={{textDecoration:"none"}} to="/holiday"><button onClick={()=>{setMenu("Holiday Deals")}}>Holiday Deals{menu==="Holiday Deals" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
          <Link to="/gift"><button  onClick={()=>{setMenu("Gift Guide")}}>Gift Guide{menu==="Gift Guide" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/new"><button onClick={()=>{setMenu("New")}}>New{menu==="New" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/women"><button onClick={()=>{setMenu("Women")}}>Women{menu==="Women" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link style={{textDecoration:"none"}} to="/men"><button onClick={()=>{setMenu("Men")}}><Link to="/Men">Men</Link>{menu==="Men" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/kids"><button onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/shoes"><button onClick={()=>{setMenu("Shoes")}}>Shoes{menu==="Shoes" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/bags"><button onClick={()=>{setMenu("Bags & Accessories")}}>Bags & Accessories{menu==="Bags & Accessories" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/"><button onClick={()=>{setMenu("Home")}}>Home{menu==="Home" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/beauty"><button onClick={()=>{setMenu("Beauty")}}>Beauty{menu==="Beauty" ? <hr/> : <></>}</button></Link>
        </li>
        <li>
        <Link to="/clearance"><button onClick={()=>{setMenu("Clearance")}}>Clearance{menu==="Clearance" ? <hr/> : <></>}</button></Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
