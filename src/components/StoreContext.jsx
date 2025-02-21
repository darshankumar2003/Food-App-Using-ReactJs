import { createContext } from "react";
import {food_list} from "../assets/assets"

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
    return (
        <StoreContext.Provider value={food_list}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;
