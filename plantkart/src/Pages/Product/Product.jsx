import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductContext } from "../../Context/ProductContextProvider";
import "./product.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { addToCart } from "../../Services/Cart/cartService";
import {  toast } from "react-toastify";
import {
  addToWishlist,
  getFromWishlist,
} from "../../Services/Wishlist/wishlistServices";

export const Product = () => {
  const { productId } = useParams();
  const { dataState, dispatch } = useContext(ProductContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 600); 
  }, []);

  const plant = dataState?.products?.find((item) => item._id === productId);
  if (!plant) {
    return <div>have to fix this</div>;
  }
  const { name, price, rating, categoryName, image_link } = plant;

  //functions
  const isInCart = dataState?.cartData.find((item) => item._id === plant._id);
  const cartHandler = (product) => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(product, token, dispatch,toast)
      : navigate("/login");
  };

  const isInWishlist = dataState?.wishList.find(
    (item) => item._id === plant._id
  );
  const wishListHandler = (product) => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlist(product, token, dispatch,toast)
      : navigate("/login");

    getFromWishlist(token, dispatch);
  };

  //component
  return (
    <div className="product-container">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader" style={{ backgroundColor: "#149253" }}></div>
        </div>
      ) : (
        <div>
          
          <img src={image_link} alt="productPic" />
          <div className="product-container-card">
            <p>{name}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{categoryName}</p>
          </div>
          <div className="product-container-buttons">
            <button
              onClick={() => cartHandler(plant)}
              className="productButtons"
            >
              {" "}
              {isInCart ? "Go To Cart" : "Add To Cart"}
            </button>
            <button
              onClick={() => wishListHandler(plant)}
              className="productButtons"
            >
              {isInWishlist ? "Go To WishList" : "Add To Wishlist"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
