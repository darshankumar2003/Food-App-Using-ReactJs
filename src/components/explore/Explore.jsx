import "./explore.css"
import   menu1 from "../../assets/menu_1.png"
import   menu2 from "../../assets/menu_2.png"
import   menu3 from "../../assets/menu_3.png"
import   menu4 from "../../assets/menu_4.png"
import   menu5 from "../../assets/menu_5.png"
import   menu6 from "../../assets/menu_6.png"
import   menu7 from "../../assets/menu_7.png"
import   menu8 from "../../assets/menu_8.png"

function Explore(){
    return(
        <>
        
        <div className="menu">
           
    <div className="menu-item">
        <img src={menu1} className="menu-img" />
        <p>Salad</p>
    </div>
    <div className="menu-item">
        <img src={menu2} className="menu-img" />
        <p>Rools</p>
    </div>
    <div className="menu-item">
        <img src={menu3} className="menu-img" />
        <p>Deserts</p>
    </div>
    <div className="menu-item">
        <img src={menu4} className="menu-img" />
        <p>Sandwitch</p>
    </div>
    <div className="menu-item">
        <img src={menu5} className="menu-img" />
        <p>Cake</p>
    </div>
    <div className="menu-item">
        <img src={menu6} className="menu-img" />
        <p>North Indian</p>
    </div>
    <div className="menu-item">
        <img src={menu7} className="menu-img" />
        <p>French Friece</p>
    </div>
    <div className="menu-item">
        <img src={menu8} className="menu-img" />
        <p>Non-Veg</p>
    </div>
</div>

        </>
    )
}
export default Explore
