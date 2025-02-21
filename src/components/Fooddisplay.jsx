import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import "./fooddisplay.css"

function Fooddisplay() {
    const foodList = useContext(StoreContext);

    return (
        <div className="foo-container">
      
        {foodList.map((item) => (
            <div className="food" >
               
            
            
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} width="100" height="100" />
                <p className="desc">{item.description}</p>
                <p className="desc"><strong>Price:</strong> {item.price}</p>
                </div>
        ))}
</div>
    
    );
    
}    

export default Fooddisplay;
