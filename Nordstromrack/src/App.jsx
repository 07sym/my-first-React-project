import React from "react";
import Navbar from "./Navbar/Navbar";
import { Link,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import HomeCategory from "./pages/HomeCategory";
import Cart from "./pages/Cart";
import Login from "./pages/login";
import Product from "./pages/Product";
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kid_banner from "./assets/banner_kids.png"

function App() {
  return (
    <div>
      
      <Navbar/>
      
      <Routes>
      
      <Route path='/' element={< Home/>}/>
      <Route path='/gift' element={<HomeCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/new' element={< HomeCategory banner={men_banner} category="men"/>}/>
      <Route path='/women' element={< HomeCategory banner={women_banner} category="women"/>}/>
      <Route path='/Men' element={< HomeCategory banner={men_banner} category="men"/>}/>
      <Route path='/kids' element={< HomeCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/shoes' element={< HomeCategory banner={women_banner} category="women"/>}/>
      <Route path='/bags' element={< HomeCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/holiday' element={< HomeCategory banner={men_banner} category="men"/>}/>
      <Route path='/beauty' element={< HomeCategory banner={women_banner} category="women"/>}/>
      <Route path='/clearance' element={< HomeCategory banner={women_banner} category="women"/>}/>
      <Route path="product" element={<Product/>}>
         <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;