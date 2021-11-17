import React, {useState, createContext} from "react";
import {ShoppingList} from "./services/shoppingList";

export const productContext = createContext();

export const ContextProvider = (props) => {
   
    const [shopItem, setshopItem] = useState(ShoppingList);

    return(
        <productContext.Provider value={[shopItem, setshopItem]}>
               {props.children}
        </productContext.Provider>
    )
}