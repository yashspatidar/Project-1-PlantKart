import { createContext, useState } from "react"

export const CartContext = createContext();
export const CartContextProvider = ({children})=>{
    const [cartData,setCartData] = useState(null);

    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}