import React, { useState } from "react";
import logo from "../../assets/logo.png"
import "./navbar.css"
import "../../../src/index.css"

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
function Navbar(){
   const[menu,setmenu]=useState("Home")
   return(
    <>
    <div className="navlist">
    <img src={logo} className="navlogo"/>
    <ul className="nav">
      <li className={menu=="Home"?"active":""} onMouseOver={()=>setmenu("Home")}>Home</li>
      <li className={menu=="Menu"?"active":""}  onMouseOver={()=>setmenu("Menu")}>Menu</li>
      <li className={menu=="Mobile-App"?"active":""} onMouseOver={()=>setmenu("Mobile-App")}>Mobile-App</li>
      <li className={menu=="Contact Us"?"active":""} onMouseOver={()=>setmenu("Contact Us")}>Contact Us</li>
      <li><FaSearch className="search" size={24} /></li>
      <li><FaShoppingCart className="cart" size={24} /></li>
      <button className="signin">Sign Up</button>
    </ul>
    </div>
    </>
   )

}
export default Navbar