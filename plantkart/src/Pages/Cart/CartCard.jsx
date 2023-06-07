import { useContext } from "react";
import "./CartStyle.css";
import { ProductContext } from "../../Context/ProductContextProvider";
import {  toast } from "react-toastify";
import { deletFromCart, updateQuantityInCart } from "../../Services/Cart/cartService";
import { AuthContext } from "../../Context/AuthContextProvider";
import {  addToWishlist } from "../../Services/Wishlist/wishlistServices";
import { useNavigate } from "react-router";
export const CartCard = ({ product }) => {
  const {  dataState, dispatch } =
    useContext(ProductContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const removeCartHandler = (product) => {
    deletFromCart(product, token, dispatch,toast);
  };

  const isInWishlist = dataState?.wishList.find((item)=> item._id === product._id)


  const addToWishlistHandler = (product) => {
    addToWishlist(product, token, dispatch,toast);

    deletFromCart(product, token, dataState, dispatch,toast);
  };

  return (
    <div className="cart-card">
      <img src={product.image_link} alt="cartImage" className="cart-Image" onClick={() => navigate(`/product/${product._id}`)}/>
      <div className="cart-card-first">
        <p>{product.name}</p>
        <p className="cart-card-price">{product.price}</p>
        <div className="quantity-card">
          <p>Quantity : </p>
          <button onClick={() => updateQuantityInCart(product,token,dispatch,"increment")} className="quantityButton">+</button>
          <p>{product.qty}</p>
          <button onClick={() => updateQuantityInCart(product,token,dispatch,"decrement")} className="quantityButton" disabled={dataState.quantityDisbable || product.qty<=1}>-</button>
        </div>

        <button
          onClick={() => removeCartHandler(product)}
          className="cart-buttons"
        >
          Remove from Cart
        </button>
        <button
          onClick={() => addToWishlistHandler(product)}
          className="cart-buttons"
          disabled={isInWishlist}
        >
          {isInWishlist ? "Already in wishlist" : "Add to wishlist"}
        </button>
      </div>
    </div>
  );
};