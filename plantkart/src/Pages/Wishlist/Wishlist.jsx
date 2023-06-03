import { useContext, useEffect } from "react";
import "./wishlist.css";
import {
  deletFromWishlist,
  // getFromWishlist,
} from "../../Services/Wishlist/wishlistServices";
import { AuthContext } from "../../Context/AuthContextProvider";
import { ProductContext } from "../../Context/ProductContextProvider";
import { addToCart } from "../../Services/Cart/cartService";
import { useNavigate } from "react-router";

export const Wishlist = () => {
  const { token } = useContext(AuthContext);
  const { dispatch, dataState } = useContext(ProductContext);
  console.log(dataState?.wishList, "dada");
  const wishlist = dataState?.wishList;
  const navigate = useNavigate();
  // useEffect(() => {
  //   getFromWishlist(token, dispatch);
  // }, []);

  const cartHandler = (product) => {
    addToCart(product, token, dispatch);
    deletFromWishlist(product, token, dispatch);
  };

  const deleteHandler = (product) => {
    deletFromWishlist(product, token, dispatch);
  };

  return (
    <div className="wishlist-container">
      <h1>This is a wishlist</h1>
      <div className="wishlist-card">
        {wishlist.map((product) => (
          <div className="first-w-card">
            <img src={product.image_link} alt="wishlist images" onClick={() => navigate(`/product/${product._id}`)} />
            <div className="second-w-card">
              <p>{product.name}</p>
              <p className="wishlisPrice">{product.price}</p>
              <button
                className="wishlistButton"
                onClick={() => cartHandler(product)}
              >
                Add to Cart
              </button>
              <button
                className="wishlistButton"
                onClick={() => deleteHandler(product)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
