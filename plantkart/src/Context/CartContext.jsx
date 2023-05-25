import { createContext, useContext, useState } from "react"
import { AuthContext } from "./AuthContextProvider";

export const CartContext = createContext();
export const CartContextProvider = ({children})=>{
    const {token} = useContext(AuthContext)

    


    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}