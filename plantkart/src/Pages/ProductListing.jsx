import "../ProductListing.css";
import axios from "axios";

import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import { AuthContext } from "../Context/AuthContextProvider";
import { Filters } from "../Components/Filters/Filters";
import { useNavigate } from "react-router";

export const ProductListing = () => {
  const {  cartHandler,dataState,} = useContext(ProductContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(dataState.cartData,"product listinfg")
  const productData = dataState.products


  const wishListHandler = async (product) => {
    if (token) {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: {
              authorization: token,
            },
          }
        );
        const data = response.data;
        console.log(data, "cart 50");
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="product-listing">
      <Filters />
      <div className="productCard">
        {productData?.map((plant) => {
          return (
            <div key={plant._id} className="card">
              <img src={plant.image_link} alt="plant" />
              <p>{plant.name}</p>
              <p>{plant.rating}</p>
              <p className="RupeePrice">
                <strike className="regularPrice">{plant.price + 150}</strike>{" "}
                From <span className="mainPrice">{plant.price}</span>
              </p>
              <p>{plant.categoryName}</p>
              <button className="addtocart" onClick={() => cartHandler(plant)}>
                {plant.is_in_cart ? "Go To Cart" : "Add To Cart"}
              </button>
              <button
                className="addtocart"
                onClick={() => wishListHandler(plant)}
              >
                Add to Wishlist
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
