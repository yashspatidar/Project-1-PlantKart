import { useContext, useEffect } from "react";
import "./CartStyle.css";
import { ProductContext } from "../../Context/ProductContextProvider";
import { deletFromCart } from "../../Services/Cart/cartService";
import { AuthContext } from "../../Context/AuthContextProvider";
import { addToWishlist} from "../../Services/Wishlist/wishlistServices";
export const CartCard = ({ product }) => {
  const { quantityIncrease, quantityDecrease, dataState, dispatch } =
    useContext(ProductContext);
  const { token } = useContext(AuthContext);
 
  const removeCartHandler = (product) => {
    deletFromCart(product,token,dataState,dispatch);
  };

  const addToWishlistHandler = (product) => {
    addToWishlist(product,token,dataState);
    deletFromCart(product,token,dataState,dispatch);
  }
 
  
  return (
    <div className="cart-card">
      <img src={product.image_link} alt="cartImage" className="cart-Image" />
      <div className="cart-card-first">
        <p>{product.name}</p>
        <p>{product.price}</p>

        <div className="quantity-card">
          <p>Quantity : </p>
          <button onClick={() => quantityIncrease(product)}>+</button>
          <p>{product.quantity}</p>
          <button onClick={() => quantityDecrease(product)}>-</button>
        </div>
        <button onClick={() => removeCartHandler(product)}>
          Remove from Cart
        </button>
        <button onClick={()=>addToWishlistHandler(product)}>Add to Wishlist</button>
      </div>
    </div>
  );
};
