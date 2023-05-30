import { useContext } from "react";
import { addToCart } from "../../Services/Cart/cartService";
import { addToWishlist } from "../../Services/Wishlist/wishlistServices";
import "./ProductListing.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router";
import { ProductContext } from "../../Context/ProductContextProvider";

export const ProductCard = ({ plant }) => {
  const { token } = useContext(AuthContext);
  const { dispatch, dataState } = useContext(ProductContext);
  const navigate = useNavigate();

  const isInCart = dataState?.cartData.find((item) => item._id === plant._id);

  const cartHandler = (item) => {
    console.log("fqwasfasfsa");
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(item, token, dispatch)
      : navigate("/login");
  };

  const wishListHandler = (item) => {
    token ? addToWishlist(item, token, dispatch) : navigate("/login");
  };

  return (
    <div key={plant._id} className="card">
      <img src={plant.image_link} alt="plant" />
      <p>{plant.name}</p>
      <p>{plant.rating}</p>
      <p className="RupeePrice">
        <strike className="regularPrice">{plant.price + 150}</strike> From{" "}
        <span className="mainPrice">{plant.price}</span>
      </p>
      <p>{plant.categoryName}</p>
      <button className="addtocart" onClick={() => cartHandler(plant)}>
        {isInCart ? "Go To Cart" : "Add To Cart"}
      </button>
      <button className="addtocart" onClick={() => wishListHandler(plant)}>
        Add to Wishlist
      </button>
    </div>
  );
};
