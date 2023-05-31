import { useContext, useEffect } from "react";
import "./wishlist.css"
import { getFromWishlist } from "../../Services/Wishlist/wishlistServices";
import { AuthContext } from "../../Context/AuthContextProvider";
import { ProductContext } from "../../Context/ProductContextProvider";

export const Wishlist = ()=>{
    const {token} = useContext(AuthContext);
    const {dispatch,dataState} = useContext(ProductContext)
    console.log(dataState?.wishList,"dada");
    const wishlist = dataState?.wishList;
    useEffect(()=>{
        getFromWishlist(token,dispatch);
      },[])

    return(
        <div className="wishlist-container">
            <h2>This is a wishlist</h2>
            <div className="wishlist-card">
                {wishlist.map((product)=>(
                    <p>{product.name}</p>
                ))}
            </div>
        </div>
    )
}