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
                    <div className="first-w-card">
                    <img src={product.image_link} alt={"wishlist images"}/>
                    <div className="second-w-card">
                    <p>{product.name}</p>
                    <p className="wishlisPrice">{product.price}</p>
                    <button className="wishlistButton">Add to Cart</button>
                    <button className="wishlistButton">Delete</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}