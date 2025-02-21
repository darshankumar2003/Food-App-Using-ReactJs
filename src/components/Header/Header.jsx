import React from "react"
import headerimg from "../../assets/header_img.png"
import "./header.css"
function Header(){
    return(
    <>
    
    <img src={headerimg} className="headerimg"/>
    <div className="headertxt">
          <p style={{ color: 'white', fontSize: '60px', fontWeight: 'bold', margin: '0' }}>Order Your Fav Food  </p>
          <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: '0' }}>Find Your Favourite</p>
          <br/>
          <button className="explore">Explore Now</button>
    </div>
    </>
    )
}
export default Header