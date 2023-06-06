import { useContext, useEffect } from "react";
import "./wishlist.css";
import {  toast } from "react-toastify";
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
  //console.log(dataState?.wishList, "dada");
  const wishlist = dataState?.wishList;
  const navigate = useNavigate();
 

  const cartHandler = (product) => {
    const isInCart = dataState?.cartData.find(
      (item) => item._id === product._id
    );
    if (isInCart) {
      toast.success("Product already in cart",{ autoClose: 500 });
    } else {
      addToCart(product, token, dispatch,toast);
      deletFromWishlist(product, token, dispatch,toast);
    }
  };

  const deleteHandler = (product) => {
    deletFromWishlist(product, token, dispatch,toast);
  };

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      {dataState?.wishList.length === 0 ? (
        <div>
        <h3>wishlist is Empty! Go to Products to add item in WishList</h3>
        <button onClick={()=>navigate("/products")} className="addtocart">Go To Products</button>
        </div>
      ):(<div className="wishlist-card">
        {wishlist.map((product) => (
          <div key={product._id} className="first-w-card">
            <img
              src={product.image_link}
              alt="wishlist images"
              onClick={() => navigate(`/product/${product._id}`)}
            />
            <div className="second-w-card">
              <p>{product.name}</p>
              <p className="wishlisPrice">{product.price}</p>
              <button
                className="wishlistButton"
                onClick={() => cartHandler(product)}
                disabled={dataState.cartDisable}
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
      </div>)}
      
      
    </div>
  );
};
